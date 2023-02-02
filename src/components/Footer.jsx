export default function Footer () {
    return  (
        <div className="text-center text-light bg-dark"id="Footer">
            <div className="d-flex mx-5">
                <p className="p-2 flex-grow-1 fs-4">ZG © 2023. Todos los derechos reservados.</p>
                <a className="p-2 text-decoration-none text-light fs-4" href="https://www.facebook.com/settings?tab=account&section=username" target="_blank">
                    <i className="fa-brands fa-square-facebook fa-2x pe-2"></i> </a>
                <a className="p-2 text-decoration-none text-light fs-4" href="https://www.instagram.com/roger_david.r/" target="_blank" >
                    <i className="fa-brands fa-instagram fa-2x pe-2"></i></a>
                <a className="p-2 text-decoration-none text-light fs-2" href="https://www.linkedin.com/in/roger-rodriguez-rdrp/" target="_blank" >
                    <i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    );
}