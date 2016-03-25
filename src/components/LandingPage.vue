<template>
    <section id="tagline-section" class="blue darken-3">
        <div id="tagline-container">
            <h1 id="tagline">Recipe Master</h1>
            <p id="sub-tagline">Your recipes, in one place.</p>
            <a v-link="{ path: '/home' }" class="btn pink accent-3">Get started</a>
        </div>
        <div id="tagline-photo-container" class="hide-on-med-and-down">
            <img id="tagline-photo" src="/src/img/samplebg.png"/>
        </div>
    </section>

    <section id="features" class="section-generic grey darken-3">
        <div class="row">
            <div class="col s12 m12 l4 feature">
                <div class="feature-icon">
                    <i class="mdi-action-backup"></i>
                </div>
                <div class="feature-content">
                    <p class="feature-header">On the cloud</p>
                    <p class="feature-message">Access your recipes from everywhere.</p>
                </div>
            </div>
            <div class="col s12 m12 l4 feature">
                <div class="feature-icon">
                    <i class="mdi-image-tag-faces"></i>
                </div>
                <div class="feature-content">
                    <p class="feature-header">Simple</p>
                    <p class="feature-message">Easy to use interface.</p>
                </div>
            </div>
            <div class="col s12 m12 l4 feature">
                <div class="feature-icon">
                    <i class="mdi-hardware-phone-iphone"></i>
                </div>
                <div class="feature-content">
                    <p class="feature-header">Mobile Friendly</p>
                    <p class="feature-message">Access your recipes on the go.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="detailed-features" class="section-generic grey darken-2">
        <div class="row">
            <div class="col s12 m12 l6">
                <h2 class="detailed-feature-header">Automatic images for your recipes.</h2>
                <p class="detailed-feature-message">We fetch images from Google to give your recipes a look.</p>
                <p class="detailed-feature-message">We select the best and the most appropriate image for your recipe. No need to upload it yourself.</p>
            </div>
            <div class="col s12 m12 l6 hide-on-med-and-down">
                <div class="center">
                    <img src="/src/img/ss1.png" style="width: 50%;"/>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col s12 m12 l6 hide-on-med-and-down">
                <img src="/src/img/ss2.png" style="width: 100%;"/>
            </div>
            <div class="col s12 m12 l6">
                <h2 class="detailed-feature-header">Markdown Supported.</h2>
                <p class="detailed-feature-message">Use Markdown to style your recipes accordingly. Use headers, ordered list, unordered list, and among many others to organize your texts.</p>
            </div>
        </div>
    </section>

    <section id="closing-line-container" class="section-generic grey darken-3">
        <h2 id="closing-line">Start saving your recipes today.</h2>
        <a v-link="{ path: '/home' }" class="btn waves-effect waves-light pink accent-3">Create an Account</a>
    </section>

    <footer class="blue darken-4">
        <div class="container">
            <div class="row" style="margin-bottom:0;">
                <div class="col s12 m12 l6">Recipe Master ©Copyright 2016</div>
                <div class="col s12 m12 l6">Email us at <span class="weight-normal">pbmrupa@gmail.com</span></div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
}
</script>
