import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <div className='row bg-secondary fixed-bottom py-2 px-4'>
                <div className='col-12 d-flex justify-content-center '>
                    <span className='mx-3 text-light'>
                        <a className="text-light" href="https://www.instagram.com/sonora_de_avispar/" target={"_blank"}>
                            Instagram <i class='bi bi-instagram text-light'></i>
                        </a>
                    </span>
                    <span className='mx-3 text-light'>
                        <a className="text-light" href='https://www.youtube.com/@sonoradeavispar' target={"_blank"}>
                            Youtube <i class='bi bi-youtube text-light'></i>
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}
