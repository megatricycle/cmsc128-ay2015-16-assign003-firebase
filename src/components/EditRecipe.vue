<template>
    <div class="content-padding">
        <div class="row">
            <div class="col s6">
                <h5>Recipe name <a id="edit-recipe-name" v-link="'#'"><i class="mdi-editor-mode-edit"></i></a></h5>
            </div>
            
            <div class="col s6">
                <div class="input-field">
                    <input id="edit-tag-field" type="text"/>
                    <label for="edit-tag-field">Tags (separated by space)</label>   
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col s12">
                <div class="card-panel">
                    <ul class="tabs">
                        <li class="tab col s6 waves-effect waves-blue black-text">
                            <a href="#">Editor</a>
                        </li>
                        <li class="tab col s6 waves-effect waves-blue">
                            <a href="#">Preview</a>
                        </li>
                    </ul>
                    
                    <textarea id="edit-text-area"></textarea>
                    
                    <div class="right">
                        <a v-link="'#'" class="btn waves-effect waves-light z-depth-0">
                            <i class="mdi-action-done"></i>
                        </a>
                    </div>
                    
                    <div style="clear:both;"></div>
                </div>
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
