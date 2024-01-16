/*
 *      Arbeit Studio © 2024
 *      The Genesis Framework
 *      https://github.com/arbeitstudio/genesis.git (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/tooltips.js
 */
function processTooltips() {
    let tooltips = Array.from(document.querySelectorAll("[data-tooltip]"));
    let groupedTooltips = tooltips.reduce((groups, tooltip) => {
        let key = tooltip.getAttribute("data-tooltip");
        if (!groups[key]) {
            groups[key] = {transmitters: [], receivers: []};
        }
        if (tooltip.hasAttribute("data-tooltip-message")) {
            groups[key].transmitters.push(tooltip);
        } else if (groups[key].receiver === undefined) {
            groups[key].receiver = tooltip;
        } else {
            console.error("Multiple receivers for tooltip " + key);
        }
        return groups;
    }, {});
    
    Object.values(groupedTooltips).forEach(({transmitters, receiver}) => {
        if (receiver) {
            let defaultText = receiver.textContent;
            transmitters.forEach(transmitter => {
                transmitter.addEventListener('mouseover', function() {
                    receiver.textContent = transmitter.getAttribute('data-tooltip-message');
                });
                transmitter.addEventListener('mouseout', function() {
                    receiver.textContent = defaultText;
                });
            });
        }
    });
}

var genesis = typeof genesis !== 'undefined' ? genesis : (genesis = 313, console.log("Close the world, .txen eht nepO :: genesis by arbeit studio"), genesis);
processTooltips();