
function FormContact() {
    return (
        <div className="w-full py-20 px-6 flex items-center justify-center">
            <div className="w-full max-w-[1120px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 bg-[rgba(5,8,22,0.88)] border border-cyan-400/10 rounded-[2rem] p-8">
                <div className="flex flex-col justify-start pt-1">
                    <div className="flex items-center gap-2.5 mb-6">
                        <span className="subtitle-purple font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl">Contactame</span>
                    </div>
                    <h1 className="text-4xl font-medium text-white mb-3 sm:mb-5">Hablemos un poco</h1>
                    <p className="text-base text-cyan-200/80 leading-relaxed max-w-[420px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis quas, deserunt rem, sit minus unde perspiciatis.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2.5">
                            <label className="text-cyan-200/80 text-sm">First Name</label>
                            <input type="text" placeholder="John" className="w-full px-3.5 py-2.5 rounded-sm bg-white/5 border border-cyan-400/20 text-white placeholder:text-cyan-200/50 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <label className="text-cyan-200/80 text-sm">Last Name</label>
                            <input type="text" placeholder="Doe" className="w-full px-3.5 py-2.5 rounded-sm bg-white/5 border border-cyan-400/20 text-white placeholder:text-cyan-200/50 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-colors" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-cyan-200/80 text-sm">Email</label>
                        <input type="email" placeholder="john@gmail.com" className="w-full px-3.5 py-2.5 rounded-sm bg-white/5 border border-cyan-400/20 text-white placeholder:text-cyan-200/50 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-cyan-200/80 text-sm">Message</label>
                        <textarea placeholder="Hi, I'd like to know more about your services..." rows="6" className="w-full px-3.5 py-3 rounded-sm bg-white/5 border border-cyan-400/20 text-white placeholder:text-cyan-200/50 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-colors resize-none" />
                    </div>
                    <button className="w-full mt-1 bg-cyan-400 text-black text-sm font-medium py-3 rounded-sm transition-colors hover:bg-cyan-300 cursor-pointer">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormContact;