import graph_base from './base.js'

export default {
    name: 'legends',
    mixins: [ graph_base ],
    props: {
        names: {
            type: Array,
            required: true
        },
        align: {
            type: String,
            required: false,
            default: 'center' // or left, right
        },
        position: {
            typ: String,
            required: false,
            default: 'bottom' // or top, start, end
        },
        dx: {
            type: Number,
            required: false,
            default: 0
        },
        dy: {
            type: Number,
            required: false,
            default: 0
        },
        filter: {
            type: Boolean,
            required: false,
            default: false
        },
        colors: {
            type: Array,
            required: false
        }
    },
    beforeMount: function(e) {
        const self = this;

        const ORIENT_MAP = {
            top: 'top',
            bottom: 'bottom',
            start: 'left',
            end: 'right'
        };

        const ALIGN_MAP = {
            left: 'start',
            center: 'center',
            right: 'end'
        }

        this.$parent.widgets.push({
            type: 'legend',
            orient: ORIENT_MAP[this.position],
            align: ALIGN_MAP[this.align],
            dx: this.dx,
            dy: this.dy,
            filter: this.filter,
            colors: this.color,
            format: function(key) {
                return self.names[key];
            }
        });
    }
}