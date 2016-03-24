<template>
    <div class="content-padding">
        <div>
            <div class="row">
                <div class="col s12">
                    <h5>{{recipe.name}}</h5>
                </div>
            </div>
            
            <div class="row">
                <div class="col s12">
                    <a v-link="{ path: '/home/recipe/'+ recipe.id + '/edit' }" class="btn waves-effect waves-grey blue darken-4">
                        <i class="mdi-editor-mode-edit"></i>
                    </a>
                    <a v-link="'#'" class="btn waves-effect waves-grey red">
                        <i class="mdi-action-delete"></i>
                    </a>
                </div>
            </div>
            
            <div class="row">
                <div class="col s12">
                    {{{markdown}}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';

import store from '../data';
import { elementWithAttr } from '../util';
import { markdown } from 'markdown';

export default {
    components: {
        LoadingSpinner
    },
    data () {
        return {
            sharedData: store
        }
    },
    computed: {
        recipe() {
            if(this.sharedData.recipeLoading) {
                return '';
            }
            
            return elementWithAttr(this.sharedData.recipes, 'id', this.$route.params.recipeId);
        },
        markdown() {
            return markdown.toHTML(this.recipe.text);
        }
    }
}
</script>
