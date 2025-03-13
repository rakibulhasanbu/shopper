import React from "react";

import config from "@/config";

const TawkTo = async () => (
    <React.Fragment>
        <script
            async
            dangerouslySetInnerHTML={{
                __html: `
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                        s1.async=true;
                        s1.src='https://embed.tawk.to/${config.tawkToId}/${config.widgetId}';
                        s1.charset='UTF-8';
                        s1.setAttribute('crossorigin','*');
                        s0.parentNode.insertBefore(s1,s0);
                        s1.onload = function() {
                            Tawk_API.maximize();
                        };
                    })();
                `,
            }}
        />
    </React.Fragment>
);

export default TawkTo;
