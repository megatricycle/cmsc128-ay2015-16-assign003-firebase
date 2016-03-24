<template>
    <div class="content-padding">
        <div class="row">
            <div class="col s6">
                <h5 v-if="!privateData.editingName">{{privateData.name}} <a id="edit-recipe-name" href="'#'" v-on:click="setNameEdit"><i class="mdi-editor-mode-edit"></i></a></h5>
                <form class="edit-name-form" v-on:submit="doneNameEdit" v-else>
                    <div class="valign-wrapper">
                        <div class="col s6">
                            <input id="edit-name-field" type="text" value={{privateData.name}} placeholder="Recipe Name"/>
                        </div>
                        <div class="col s6">
                            <button class="btn-flat" type="submit"><i class="mdi-action-done"></i></button>
                        </div>
                    </div>
                </form>
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
                        <li class="tab col s6 waves-effect waves-blue black-text" v-on:click="setEditor">
                            <a href="#">Editor</a>
                        </li>
                        <li class="tab col s6 waves-effect waves-blue" v-on:click="setPreview">
                            <a href="#">Preview</a>
                        </li>
                    </ul>
                    
                    <textarea id="edit-text-area" class="no-resize" v-show="privateData.state == 'edit'" v-on:keyup="setText"></textarea>
                    <div class="preview-container" v-else>{{{markdown}}}</div>
                    
                    <div class="left" v-show="privateData.state == 'edit'">
                        <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" style="color:black;text-decoration:underline">
                            <i class="mdi-editor-format-quote"></i> Styling with markdown is supported. 
                        </a>
                    </div>
                    
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
import { markdown } from 'markdown';
import store from '../data.js'; 

export default {
    data () {
        return {
            privateData: {
                state: 'edit',
                text: '',
                name: '',
                editingName: false
            },
            sharedData: store
        }
    },
    computed: {
        markdown() {
            return markdown.toHTML(this.privateData.text);
        }
    },
    methods: {
        setEditor(e) {
            e.preventDefault();
            this.privateData.state = 'edit';
        },
        setPreview(e) {
            e.preventDefault();
            this.privateData.state = 'preview';
        },
        setText(e) {
            this.privateData.text = e.target.value;
        },
        setNameEdit(e) {
            e.preventDefault();
            this.privateData.editingName = true;
        },
        doneNameEdit(e) {
            e.preventDefault();
            this.privateData.name = $('#edit-name-field').val();
            this.privateData.editingName = false;
        }
    }
}
</script>
