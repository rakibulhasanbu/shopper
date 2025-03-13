import React from "react";

import config from "@/config";
import { GoogleTagManager } from "@next/third-parties/google";

import FacebookPixel from "@/lib/pixel";
import TawkTo from "@/lib/tawk";

const ThirdParties = async () => {
    return (
        <React.Fragment>
            <FacebookPixel />
            <TawkTo />
            <GoogleTagManager gtmId={config.googleTagManagerId} />
        </React.Fragment>
    );
};

export default ThirdParties;
