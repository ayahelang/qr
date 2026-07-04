/*
====================================================
SilverQR Scheduler Engine
Version : 1.0.0
====================================================
*/

import Utils from "./utils.js";
import Storage from "./storage.js";

export default class Scheduler {

    constructor(rules = []) {

        this.rules = rules;

    }

    getMode() {

        return Storage.load("mode", "AUTO");

    }

    getCurrentRule() {

        const mode = this.getMode();

        //----------------------------------
        // Manual Override
        //----------------------------------

        if (mode !== "AUTO") {

            return {

                name: "Manual Override",

                plugin: mode.toLowerCase(),

                priority: 999

            };

        }

        //----------------------------------
        // AUTO MODE
        //----------------------------------

        const day = Utils.currentDay();

        const time = Utils.currentTime();

        let selected = null;

        for (const rule of this.rules) {

            if (!rule.enabled)
                continue;

            if (!rule.days.includes(day))
                continue;

            if (time < rule.start)
                continue;

            if (time > rule.end)
                continue;

            if (selected == null) {

                selected = rule;

                continue;

            }

            if (rule.priority > selected.priority) {

                selected = rule;

            }

        }

        return selected;

    }

}
