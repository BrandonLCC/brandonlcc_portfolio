


function Footer() {
    return (
        <footer className="flex flex-col items-center justify-around w-full py-16 text-sm bg-slate-50 text-gray-800/70">
            <p>logo</p>
            <p className="mt-4 text-center">
                Copyright © 2025 <a href="https://prebuiltui.com">....</a>. All rights reservered.
            </p>
            <div className="flex items-center gap-4 mt-6">
                <a href="#" className="font-medium text-gray-800 hover:text-black transition-all">
                    BOTON
                </a>
                <div className="h-4 w-px bg-black/20" />
                <a href="#" className="font-medium text-gray-800 hover:text-black transition-all">
                    BOTON
                </a>
            </div>
        </footer>
    )
}

export default Footer;