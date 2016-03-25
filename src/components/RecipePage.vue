<template>
    <div class="content-padding" v-if="recipe">
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
                    <a href="'#'" class="btn waves-effect waves-grey red" v-on:click="deleteRecipe">
                        <i class="mdi-action-delete"></i>
                    </a>
                </div>
            </div>
            
            <div class="row">
                <div class="col s12 recipe-text">
                    {{{markdown}}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../data';
import { elementWithAttr } from '../util';
import { markdown } from 'markdown';

export default {
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
    },
    methods: {
        deleteRecipe(e) {
            e.preventDefault();
            
            let recipe = this.recipe;
            
            let itemFirebase = new Firebase('https://recipe-master.firebaseio.com/recipes/' + recipe.id);
            
            itemFirebase.remove(() => {
                Materialize.toast('Removed ' + recipe.name + '.', 4000, 'green');
                
                this.$route.router.go('/home')
            });
        }
    }
}
</script>
