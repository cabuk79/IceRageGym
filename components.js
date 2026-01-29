class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="nav-container">
            <header>
                <div class="logo-container">
                    <span class="logo-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-barbell"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12h1" /><path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" /><path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" /><path d="M9 12h6" /><path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" /><path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" /><path d="M22 12h-1" /></svg>
                    </span>
                    <div class="logo-text-container">
                        <span class="logo-text-begin">ICE</span>
                        <span class="logo-text-end">RAGE</span>
                    </div>
                </div>
            </header>
        
            <div class="nav-btn-container">
                <nav>
                    <ul>
                        <li><a href="index.html#about">ABOUT ABAID</a></li>
                        <li><a href="index.html#thegym">THE GYM</a></li>
                        <li><a href="index.html#gallery">GALLERY</a></li>
                        <li><a href="https://www.icebergsupplements.com" target="_blank">SHOP</a></li>
                    </ul>
                </nav>
                <div class="enquire-btn-container">
                    <a href="index.html#enquire" class="enquire-btn">ENQUIRE NOW</a>
                </div>
            </div>  
            
            <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

            <ul class="mobile-menu">
                <li><a href="index.html#about" onclick="toggleMobileMenu(document.getElementById('hamburger-icon'))">ABOUT ABAID</a></li>
                <li><a href="index.html#thegym" onclick="toggleMobileMenu(document.getElementById('hamburger-icon'))">THE GYM</a></li>
                <li><a href="index.html#gallery" onclick="toggleMobileMenu(document.getElementById('hamburger-icon'))">GALLERY</a></li>
                <li><a href="https://www.icebergsupplements.com" target="_blank">SHOP</a></li>
            </ul>
        </div>
        `;
    }
}

// Register the new tag so the browser knows what <app-header> is
customElements.define('app-header', AppHeader);