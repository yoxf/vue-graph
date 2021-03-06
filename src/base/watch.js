export default {
    watch: {
        width: function(newVal, oldVal) {
            this.chart.setSize(newVal, this.height);
            this.chart.render()
        },
        height: function(newVal, oldVal) {
            this.chart.setSize(this.width, newVal);
            this.chart.render()
        },
        labels: function(newVal, oldVal) { // watch it
            this.chart.axis(0).set(this.axisReverse ? 'y' : 'x', { domain: newVal });
            this.chart.render();
        },
        values: function(newVal, oldVal) { // watch it
            this.chart.axis(0).update(this.convertToData(newVal));
            this.chart.render();
        },
        axisMin: function(newVal, oldVal) {
            this.chart.axis(0).set(this.axisReverse ? 'x' : 'y', { domain: [ newVal, this.axisMax ] });
            this.chart.render();
        },
        axisMax: function(newVal, oldVal) {
            this.chart.axis(0).set(this.axisReverse ? 'x' : 'y', { domain: [ this.axisMin, newVal ] });
            this.chart.render();
        }
    }
}