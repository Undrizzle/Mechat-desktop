<template>
    <div class="contact_list" v-nicebar id="contact_list">
        <div >
            <h4 class="contact_title">A</h4>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy"  v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+ 0</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+1</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+2</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+3</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+4</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+5</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+6</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+7</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+8</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+9</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+10</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+11</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+12</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+13</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+14</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+15</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+16</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+17</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+18</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+19</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+20</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+21</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+22</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+23</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+24</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+25</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+26</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+27</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+28</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+29</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+30</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+31</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+32</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+33</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+ 34</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+ 35</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+ 36</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+ 37</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+ 38</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+ 39</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item of allContacts">
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.username }}+ 40</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import axios from 'axios'

    export default {
        name: 'contactItem',
        data() {
            return {
                allContacts: []
            }
        },
        directives: {
            nicebar: {
                componentUpdated: function (el, binding) {
                }
            }
        },
        created: function() {
            let self = this
            axios.post('http://127.0.0.1:3000/contact', {
                id: 'undrizzle'
            }).then(function (response) {
                self.copyContacts(response.data)
            }).catch(function (error) {
                console.log(error)
            })
        },
        beforeDestroy: function() {
          this.allContatcs = []
        },
        methods: {
            copyContacts(item) {
                this.allContacts = item
            }
        }
    }
</script>

<style>
    .contact_list .contact_title {
        padding: 1px 18px;
        font-weight: 400;
        color: #787b87;
        background: #292d32;
        font-size: 14px;
    }

    .contact_list .contact_item {
        overflow: hidden;
        padding: 10px 18px 9px;
        border-bottom: 1px solid #292c33;
        cursor: pointer;
    }

    .contact_list .avatar {
        float: left;
        margin-right: 10px;
    }

    .contact_list .avatar .img {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 2px;
    }

    .contact_list .info {
        overflow: hidden;
        line-height: 30px;
    }

    .contact_list .info .nickname {
        color: #fff;
        font-weight: 400;
        font-size: 13px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis; /*文本溢出时显示省略号来代表被修剪的文本*/
        white-space: nowrap;
        word-wrap: normal;
    }

    .contact_list .active {
        background: #3b4047;
    }

    .contact_list {
        height: 100%;
        overflow: auto;
    }

    /*scrollbar*/

</style>