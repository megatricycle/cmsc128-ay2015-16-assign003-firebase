<template>
    <section id="tagline-section" class="blue darken-4">
        <div id="tagline-container">
            <h1 id="tagline">Your recipes in one place.</h1>
            <p id="sub-tagline">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quas.</p>
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
                    <i class="mdi-action-account-circle"></i>
                </div>
                <div class="feature-content">
                    <p class="feature-header">Awesome</p>
                    <p class="feature-message">Watch and be amazeballs.</p>
                </div>
            </div>
            <div class="col s12 m12 l4 feature">
                <div class="feature-icon">
                    <i class="mdi-action-account-circle"></i>
                </div>
                <div class="feature-content">
                    <p class="feature-header">Featured</p>
                    <p class="feature-message">Some supporting details.</p>
                </div>
            </div>
            <div class="col s12 m12 l4 feature">
                <div class="feature-icon">
                    <i class="mdi-action-account-circle"></i>
                </div>
                <div class="feature-content">
                    <p class="feature-header">Featured</p>
                    <p class="feature-message">Some supporting details.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="detailed-features" class="section-generic grey darken-4">
        <div class="row">
            <div class="col s12 m12 l6">
                <h2 class="detailed-feature-header">This is something awesome.</h2>
                <p class="detailed-feature-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure neque assumenda quos deleniti officiis earum nisi magnam! Numquam, at sint.</p>
                <p class="detailed-feature-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut vitae reprehenderit debitis dolore sunt accusamus unde aspernatur illo quos itaque, eligendi esse nulla laudantium fugit voluptas perspiciatis! Minima maiores quia natus quidem qui incidunt provident autem! Doloremque, quia adipisci ea?</p>
            </div>
            <div class="col s12 m12 l6 hide-on-med-and-down">
                <p style="text-align:center">Photo here</p>
            </div>
        </div>
        
        <div class="row">
            <div class="col s12 m12 l6 hide-on-med-and-down">
                <p style="text-align:center">Photo here</p>
            </div>
            <div class="col s12 m12 l6">
                <h2 class="detailed-feature-header">This is also something awesome.</h2>
                <p class="detailed-feature-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est pariatur magni amet quod impedit natus, earum, veniam. Pariatur dolore veniam ratione modi? Illum sequi saepe odit repellendus ipsam autem veniam molestiae rerum placeat?</p>
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
                <div class="col s12 m12 l6">RecipeMaster ©Copyright 2016</div>
                <div class="col s12 m12 l6">Email us at <span class="weight-normal">pbmrupa@gmail.com</span></div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    props: ['state'],
    data () {
        return {
            // note: changing this line won't causes changes
            // with hot-reload because the reloaded component
            // preserves its current state and we are modifying
            // its initial state.
            msg: 'Hello World!'
        }
    }
}
</script>
