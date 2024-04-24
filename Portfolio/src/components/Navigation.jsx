const Navigation = () => {
    return(
        <>
        <div class="container">
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a href="#" class="navbar-brand">MyPortfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>      
                    <div class="collapse navbar-collapse" id="navbar">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a href="#" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item active">
                                <a href="#about" class="nav-link">About</a>
                            </li>
                            <li class="nav-item active">
                                <a href="#skills" class="nav-link">Skills</a>
                            </li>
                            <li class="nav-item active">
                                <a href="#works" class="nav-link">Works</a>
                            </li>
                            <li class="nav-item active">
                                <a href="#contact" class="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navigation;