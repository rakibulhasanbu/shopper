"use client";

import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Editor = ({ content }: { content: string }) => {
    const editor = useEditor({
        immediatelyRender: false,
        content,
        editable: false,
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({
                types: ["heading", "paragraph"],
                alignments: ["left", "center", "right", "justify"],
                defaultAlignment: "left",
            }),
        ],
        editorProps: {
            attributes: {
                class: "pt-4 lg:pt-6",
            },
        },
    });

    return (
        <div
            id="editor"
            className={`no-scrollbar [&_.ProseMirror]:prose [&_.ProseMirror]:font-inherit [&_.ProseMirror]:max-w-none [&_.ProseMirror_.is-editor-empty]:text-muted-foreground [&_.ProseMirror_p[style*="text-align"]]:!my-0`}
            onClick={() => editor?.chain().focus().run()}
        >
            <EditorContent className={"min-h-60"} editor={editor} />
        </div>
    );
};
