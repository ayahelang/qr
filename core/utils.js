/*
====================================================
SilverQR Utils
Version : 1.0.0
====================================================
*/

export default class Utils {

    static now() {

        return new Date();

    }

    static currentDay() {

        return [

            "sunday",

            "monday",

            "tuesday",

            "wednesday",

            "thursday",

            "friday",

            "saturday"

        ][new Date().getDay()];

    }

    static currentTime() {

        const d = new Date();

        const hh = String(

            d.getHours()

        ).padStart(2, "0");

        const mm = String(

            d.getMinutes()

        ).padStart(2, "0");

        return hh + ":" + mm;

    }

    static uuid() {

        return crypto.randomUUID();

    }

    static delay(ms) {

        return new Promise(

            resolve => setTimeout(

                resolve,

                ms

            )

        );

    }

    static clone(obj) {

        return JSON.parse(

            JSON.stringify(obj)

        );

    }

    static formatDate(date = new Date()) {

        return date.toLocaleDateString(

            "id-ID"

        );

    }

    static formatTime(date = new Date()) {

        return date.toLocaleTimeString(

            "id-ID",

            {

                hour: "2-digit",

                minute: "2-digit",

                second: "2-digit"

            }

        );

    }

    }
