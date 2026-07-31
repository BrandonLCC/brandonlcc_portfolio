


function Footer() {
    return (
        <footer className="flex flex-col items-center justify-around w-full py-16 bg-[rgba(2,4,16,0.95)] text-white/80">
            <p className="text-white font-semibold">logo</p>
            <p className="mt-4 text-center text-white/70">
                Copyright © 2025 <a href="https://prebuiltui.com" className="text-cyan-400 hover:text-white transition-all">....</a>. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-6">
                <a href="#" className="font-medium text-cyan-400 hover:text-white transition-all">
                    BOTON
                </a>
                <div className="h-4 w-px bg-white/10" />
                <a href="#" className="font-medium text-cyan-400 hover:text-white transition-all">
                    BOTON
                </a>
            </div>
        </footer>
    )
}

export default Footer;