const Auth = () => {
    return (
        /* container */
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            {/* backgound pagina */}
            <div className="bg-black w-full h-full bg-opacity-50">
                {/* nav logo */}
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />
                </nav>
                {/* Nav */}
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 w-2/5 max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">Accedi</h2>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Auth;