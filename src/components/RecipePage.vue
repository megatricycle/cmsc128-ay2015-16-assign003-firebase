<template>
    <div class="content-padding">
        <div class="row">
            <div class="col s12">
                <h5>Recipe name</h5>
            </div>
        </div>
        
        <div class="row">
            <div class="col s12">
                <a v-link="{ path: '/home/recipe/testrecipeid/edit' }" class="btn waves-effect waves-grey blue darken-4">
                    <i class="mdi-editor-mode-edit"></i>
                </a>
                <a v-link="'#'" class="btn waves-effect waves-grey red">
                    <i class="mdi-action-delete"></i>
                </a>
            </div>
        </div>
        
        <div class="row">
            <div class="col s12">
                <p>This is where your shit will go. Your recipe of destruction goes here.</p>
                
                <ul class="list">
                    <li class="list">Hopefully, your markdown works.</li>
                    <li class="list">Well, do I?</li>
                </ul>
                
                <ol>
                    <li>Hopefully, your markdown works.</li>
                    <li>Well, do I?</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>
