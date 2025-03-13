import Script from "next/script";

const LordIcon = ({ src }: { src: string }) => {
    return (
        <>
            <Script src="https://cdn.lordicon.com/lordicon.js" />
            <div
                dangerouslySetInnerHTML={{
                    __html: `<lord-icon
                            src=${src}
                            trigger="loop"
                            stroke="light"
                            state="hover-pinch"
                            colors="primary:#121331,secondary:#ebe6ef,tertiary:#ffbe00,quaternary:#f24c00"
                            style="width:150px;height:150px">
                        </lord-icon>`,
                }}
            />
        </>
    );
};

export default LordIcon;
