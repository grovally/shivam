import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import CodeBlock from "@tiptap/extension-code-block";
import { Table, TableRow, TableCell, TableHeader } from "@tiptap/extension-table";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useState } from "react";

// =========================
// TOOLBAR BUTTON
// =========================
function ToolbarButton({ onClick, active, title, children, disabled }) {
  return (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={disabled}
      title={title}
      className={`
        flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium transition-all duration-150 select-none
        ${active
          ? "bg-black text-white shadow-sm"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }
        ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {children}
    </button>
  );
}

// =========================
// TOOLBAR DIVIDER
// =========================
function Divider() {
  return <div className="w-px h-6 bg-gray-200 mx-1 self-center" />;
}

// =========================
// TOOLBAR SELECT
// =========================
function ToolbarSelect({ value, onChange, options, title }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      title={title}
      onMouseDown={(e) => e.stopPropagation()}
      className="h-8 px-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-700 outline-none focus:border-black cursor-pointer"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

// =========================
// MAIN RICH TEXT EDITOR
// =========================
export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Start writing...",
  minHeight = "200px",
}) {
  const [showHTMLModal, setShowHTMLModal] = useState(false);
  const [htmlInput, setHtmlInput] = useState("");
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [showTableModal, setShowTableModal] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [tableHeader, setTableHeader] = useState(true);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [sourceCode, setSourceCode] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 underline cursor-pointer",
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
      Image.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: {
          class: "max-w-full rounded-lg my-3",
        },
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class:
            "bg-gray-900 text-green-400 p-4 rounded-xl font-mono text-sm overflow-x-auto my-3",
        },
      }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: value || "",
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "outline-none min-h-full",
        style: `min-height: ${minHeight}; padding: 16px;`,
      },
    },
  });

  // Sync external value changes (e.g., when loading blog for edit)
  useEffect(() => {
    if (!editor) return;
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value || "", false);
    }
  }, [value, editor]);

  if (!editor) return null;

  // =========================
  // HEADING LEVEL
  // =========================
  const getHeadingValue = () => {
    for (let i = 1; i <= 6; i++) {
      if (editor.isActive("heading", { level: i })) return String(i);
    }
    return "0";
  };

  const setHeading = (val) => {
    if (val === "0") {
      editor.chain().focus().setParagraph().run();
    } else {
      editor
        .chain()
        .focus()
        .toggleHeading({ level: parseInt(val) })
        .run();
    }
  };

  // =========================
  // INSERT LINK
  // =========================
  const insertLink = () => {
    if (!linkUrl.trim()) return;
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: linkUrl.trim() })
      .run();
    setLinkUrl("");
    setShowLinkModal(false);
  };

  // =========================
  // INSERT IMAGE
  // =========================
  const insertImage = () => {
    if (!imageUrl.trim()) return;
    editor.chain().focus().setImage({ src: imageUrl.trim() }).run();
    setImageUrl("");
    setShowImageModal(false);
  };

  // =========================
  // INSERT CUSTOM HTML
  // =========================
  const insertHTML = () => {
    if (!htmlInput.trim()) return;
    editor.commands.insertContent(htmlInput.trim());
    setHtmlInput("");
    setShowHTMLModal(false);
  };

  // =========================
  // INSERT TABLE (modal)
  // =========================
  const openTableModal = () => {
    setTableRows(3);
    setTableCols(3);
    setTableHeader(true);
    setShowTableModal(true);
  };

  const insertTableFromModal = () => {
    editor
      .chain()
      .focus()
      .insertTable({
        rows: Math.max(1, tableRows),
        cols: Math.max(1, tableCols),
        withHeaderRow: tableHeader,
      })
      .run();
    setShowTableModal(false);
  };

  // =========================
  // SOURCE CODE VIEW
  // =========================
  const openSourceModal = () => {
    setSourceCode(editor.getHTML());
    setShowSourceModal(true);
  };

  const applySourceCode = () => {
    editor.commands.setContent(sourceCode, false);
    onChange(sourceCode);
    setShowSourceModal(false);
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-black transition-all">

      {/* ===========================
          TOOLBAR
      =========================== */}
      <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex flex-wrap items-center gap-1">

        {/* HEADING SELECT */}
        <ToolbarSelect
          title="Heading / Paragraph"
          value={getHeadingValue()}
          onChange={setHeading}
          options={[
            { value: "0", label: "Paragraph" },
            { value: "1", label: "Heading 1" },
            { value: "2", label: "Heading 2" },
            { value: "3", label: "Heading 3" },
            { value: "4", label: "Heading 4" },
            { value: "5", label: "Heading 5" },
            { value: "6", label: "Heading 6" },
          ]}
        />

        <Divider />

        {/* BOLD */}
        <ToolbarButton
          title="Bold (Ctrl+B)"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <strong>B</strong>
        </ToolbarButton>

        {/* ITALIC */}
        <ToolbarButton
          title="Italic (Ctrl+I)"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <em>I</em>
        </ToolbarButton>

        {/* UNDERLINE */}
        <ToolbarButton
          title="Underline (Ctrl+U)"
          active={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <span className="underline">U</span>
        </ToolbarButton>

        {/* STRIKETHROUGH */}
        <ToolbarButton
          title="Strikethrough"
          active={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <span className="line-through">S</span>
        </ToolbarButton>

        <Divider />

        {/* TEXT COLOR */}
        <label
          title="Text Color"
          className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 cursor-pointer transition"
        >
          <span className="text-sm font-bold" style={{ color: "#e53e3e" }}>A</span>
          <input
            type="color"
            className="sr-only"
            onInput={(e) =>
              editor.chain().focus().setColor(e.target.value).run()
            }
          />
        </label>

        {/* HIGHLIGHT */}
        <label
          title="Highlight Color"
          className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 cursor-pointer transition"
        >
          <span className="text-sm font-bold bg-yellow-300 px-1 rounded">H</span>
          <input
            type="color"
            className="sr-only"
            defaultValue="#fef08a"
            onInput={(e) =>
              editor
                .chain()
                .focus()
                .toggleHighlight({ color: e.target.value })
                .run()
            }
          />
        </label>

        <Divider />

        {/* ALIGN LEFT */}
        <ToolbarButton
          title="Align Left"
          active={editor.isActive({ textAlign: "left" })}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h10M4 14h16M4 18h10" />
          </svg>
        </ToolbarButton>

        {/* ALIGN CENTER */}
        <ToolbarButton
          title="Align Center"
          active={editor.isActive({ textAlign: "center" })}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M7 10h10M4 14h16M7 18h10" />
          </svg>
        </ToolbarButton>

        {/* ALIGN RIGHT */}
        <ToolbarButton
          title="Align Right"
          active={editor.isActive({ textAlign: "right" })}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M10 10h10M4 14h16M10 18h10" />
          </svg>
        </ToolbarButton>

        {/* ALIGN JUSTIFY */}
        <ToolbarButton
          title="Justify"
          active={editor.isActive({ textAlign: "justify" })}
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        </ToolbarButton>

        <Divider />

        {/* BULLET LIST */}
        <ToolbarButton
          title="Bullet List"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
          </svg>
        </ToolbarButton>

        {/* ORDERED LIST */}
        <ToolbarButton
          title="Ordered List"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h11M9 12h11M9 19h11M5 5v.01M5 12v.01M5 19v.01" />
          </svg>
        </ToolbarButton>

        <Divider />

        {/* BLOCKQUOTE */}
        <ToolbarButton
          title="Blockquote"
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </ToolbarButton>

        {/* CODE BLOCK */}
        <ToolbarButton
          title="Code Block"
          active={editor.isActive("codeBlock")}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </ToolbarButton>

        {/* INLINE CODE */}
        <ToolbarButton
          title="Inline Code"
          active={editor.isActive("code")}
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </ToolbarButton>

        <Divider />

        {/* LINK */}
        <ToolbarButton
          title="Insert Link"
          active={editor.isActive("link")}
          onClick={() => setShowLinkModal(true)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </ToolbarButton>

        {/* IMAGE */}
        <ToolbarButton
          title="Insert Image"
          active={false}
          onClick={() => setShowImageModal(true)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </ToolbarButton>

        {/* TABLE */}
        <ToolbarButton
          title="Insert Table"
          active={editor.isActive("table")}
          onClick={openTableModal}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M10 3v18M6 3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z" />
          </svg>
        </ToolbarButton>

        {/* HORIZONTAL RULE */}
        <ToolbarButton
          title="Horizontal Rule"
          active={false}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
          </svg>
        </ToolbarButton>

        {/* CUSTOM HTML */}
        <ToolbarButton
          title="Insert Custom HTML"
          active={false}
          onClick={() => setShowHTMLModal(true)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v6h6" />
          </svg>
        </ToolbarButton>

        {/* SOURCE CODE */}
        <ToolbarButton
          title="View / Edit Source Code"
          active={showSourceModal}
          onClick={openSourceModal}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
          </svg>
        </ToolbarButton>

        <Divider />

        {/* UNDO */}
        <ToolbarButton
          title="Undo (Ctrl+Z)"
          active={false}
          disabled={!editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6M3 10l6-6" />
          </svg>
        </ToolbarButton>

        {/* REDO */}
        <ToolbarButton
          title="Redo (Ctrl+Y)"
          active={false}
          disabled={!editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
          </svg>
        </ToolbarButton>

      </div>

      {/* ===========================
          EDITOR CONTENT AREA
      =========================== */}
      <div className="bg-white">
        <style>{`
          .tiptap-editor p.is-editor-empty:first-child::before {
            content: attr(data-placeholder);
            float: left;
            color: #9ca3af;
            pointer-events: none;
            height: 0;
          }
          .tiptap-editor h1 { font-size: 2em; font-weight: 700; margin: 0.5em 0; }
          .tiptap-editor h2 { font-size: 1.6em; font-weight: 700; margin: 0.5em 0; }
          .tiptap-editor h3 { font-size: 1.3em; font-weight: 600; margin: 0.5em 0; }
          .tiptap-editor h4 { font-size: 1.1em; font-weight: 600; margin: 0.5em 0; }
          .tiptap-editor h5 { font-size: 1em; font-weight: 600; margin: 0.5em 0; }
          .tiptap-editor h6 { font-size: 0.9em; font-weight: 600; margin: 0.5em 0; }
          .tiptap-editor ul { list-style-type: disc; padding-left: 1.5em; margin: 0.5em 0; }
          .tiptap-editor ol { list-style-type: decimal; padding-left: 1.5em; margin: 0.5em 0; }
          .tiptap-editor blockquote { border-left: 4px solid #e5e7eb; padding-left: 1em; color: #6b7280; margin: 0.5em 0; font-style: italic; }
          .tiptap-editor pre { background: #111827; color: #34d399; padding: 1em; border-radius: 0.75em; font-family: monospace; font-size: 0.875em; overflow-x: auto; margin: 0.5em 0; }
          .tiptap-editor code:not(pre code) { background: #f3f4f6; color: #dc2626; padding: 0.15em 0.4em; border-radius: 0.3em; font-family: monospace; font-size: 0.875em; }
          .tiptap-editor hr { border: none; border-top: 2px solid #e5e7eb; margin: 1.5em 0; }
          .tiptap-editor a { color: #2563eb; text-decoration: underline; cursor: pointer; }
          .tiptap-editor table { border-collapse: collapse; width: 100%; margin: 1em 0; }
          .tiptap-editor th, .tiptap-editor td { border: 1px solid #d1d5db; padding: 0.5em 0.75em; }
          .tiptap-editor th { background: #f9fafb; font-weight: 600; }
          .tiptap-editor img { max-width: 100%; border-radius: 0.5em; margin: 0.5em 0; }
          .tiptap-editor p { margin: 0.4em 0; line-height: 1.7; }
        `}</style>
        <EditorContent editor={editor} className="tiptap-editor" />
      </div>

      {/* ===========================
          LINK MODAL
      =========================== */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <h3 className="font-bold text-gray-900 mb-4">Insert Link</h3>
            <input
              type="url"
              autoFocus
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && insertLink()}
              placeholder="https://example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black text-sm"
            />
            <div className="flex gap-3 mt-4">
              <button
                type="button"
                onClick={insertLink}
                className="flex-1 bg-black text-white py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition text-sm"
              >
                Insert
              </button>
              <button
                type="button"
                onClick={() => { setShowLinkModal(false); setLinkUrl(""); }}
                className="flex-1 border border-gray-200 py-2.5 rounded-xl font-semibold hover:bg-gray-50 transition text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===========================
          IMAGE MODAL
      =========================== */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <h3 className="font-bold text-gray-900 mb-4">Insert Image</h3>
            <input
              type="url"
              autoFocus
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && insertImage()}
              placeholder="https://res.cloudinary.com/..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black text-sm"
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                className="mt-3 w-full h-32 object-cover rounded-xl border border-gray-100"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            )}
            <div className="flex gap-3 mt-4">
              <button
                type="button"
                onClick={insertImage}
                className="flex-1 bg-black text-white py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition text-sm"
              >
                Insert
              </button>
              <button
                type="button"
                onClick={() => { setShowImageModal(false); setImageUrl(""); }}
                className="flex-1 border border-gray-200 py-2.5 rounded-xl font-semibold hover:bg-gray-50 transition text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===========================
          CUSTOM HTML MODAL
      =========================== */}
      {showHTMLModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg mx-4">
            <h3 className="font-bold text-gray-900 mb-1">Insert Custom HTML</h3>
            <p className="text-xs text-gray-500 mb-4">Paste any HTML — it will be rendered directly in the editor.</p>
            <textarea
              autoFocus
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
              placeholder={'<div class="highlight">\n  <p>Your custom HTML here</p>\n</div>'}
              rows={6}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black text-sm font-mono resize-none"
            />
            <div className="flex gap-3 mt-4">
              <button
                type="button"
                onClick={insertHTML}
                className="flex-1 bg-black text-white py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition text-sm"
              >
                Insert HTML
              </button>
              <button
                type="button"
                onClick={() => { setShowHTMLModal(false); setHtmlInput(""); }}
                className="flex-1 border border-gray-200 py-2.5 rounded-xl font-semibold hover:bg-gray-50 transition text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===========================
          TABLE MODAL
      =========================== */}
      {showTableModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <h3 className="font-bold text-gray-900 mb-1">Insert Table</h3>
            <p className="text-xs text-gray-500 mb-5">Choose the number of rows and columns.</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Rows</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={tableRows}
                  onChange={(e) => setTableRows(parseInt(e.target.value) || 1)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Columns</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={tableCols}
                  onChange={(e) => setTableCols(parseInt(e.target.value) || 1)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black text-sm"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer mb-5">
              <input
                type="checkbox"
                checked={tableHeader}
                onChange={(e) => setTableHeader(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm font-medium text-gray-700">Include header row</span>
            </label>

            {/* PREVIEW */}
            <div className="mb-5 overflow-auto rounded-lg border border-gray-100 bg-gray-50 p-2">
              <table className="text-xs w-full border-collapse">
                <tbody>
                  {Array.from({ length: Math.min(tableRows, 5) }).map((_, r) => (
                    <tr key={r}>
                      {Array.from({ length: Math.min(tableCols, 6) }).map((_, c) => (
                        tableHeader && r === 0
                          ? <th key={c} className="border border-gray-300 bg-gray-200 px-2 py-1 font-semibold">H{c + 1}</th>
                          : <td key={c} className="border border-gray-300 px-2 py-1 text-gray-400 text-center">·</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {tableRows > 5 && <p className="text-center text-xs text-gray-400 mt-1">... {tableRows - 5} more rows</p>}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={insertTableFromModal}
                className="flex-1 bg-black text-white py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition text-sm"
              >
                Insert Table
              </button>
              <button
                type="button"
                onClick={() => setShowTableModal(false)}
                className="flex-1 border border-gray-200 py-2.5 rounded-xl font-semibold hover:bg-gray-50 transition text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===========================
          SOURCE CODE MODAL
      =========================== */}
      {showSourceModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-3xl mx-4 flex flex-col" style={{ maxHeight: "90vh" }}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-bold text-gray-900">Source Code</h3>
                <p className="text-xs text-gray-500">Edit the raw HTML — changes will be applied to the editor.</p>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg font-mono">&lt;/&gt; HTML</span>
            </div>
            <textarea
              autoFocus
              value={sourceCode}
              onChange={(e) => setSourceCode(e.target.value)}
              className="flex-1 w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black text-sm font-mono resize-none bg-gray-950 text-green-400"
              style={{ minHeight: "320px" }}
              spellCheck={false}
            />
            <div className="flex gap-3 mt-4">
              <button
                type="button"
                onClick={applySourceCode}
                className="flex-1 bg-black text-white py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition text-sm"
              >
                Apply Changes
              </button>
              <button
                type="button"
                onClick={() => setShowSourceModal(false)}
                className="flex-1 border border-gray-200 py-2.5 rounded-xl font-semibold hover:bg-gray-50 transition text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
