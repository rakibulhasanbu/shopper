import Script from "next/script";

const LottiePlayer = ({
    src,
    className,
    width = "300",
    height = "300",
}: {
    src: string;
    className?: string;
    width?: string;
    height?: string;
}) => {
    return (
        <div className={className}>
            <Script
                src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
                type="module"
            />
            <div
                dangerouslySetInnerHTML={{
                    __html: `<dotlottie-player
                        src=${src}
                        background="transparent"
                        speed="1"
                        style="width: ${width}px; height: ${height}px"
                        loop
                        autoplay>
                    </dotlottie-player>`,
                }}
            />
        </div>
    );
};

export default LottiePlayer;
