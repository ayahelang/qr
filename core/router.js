/*
====================================================
SilverQR Router
Version : 1.0.0
====================================================
*/

export default class Router {

    static go(url) {

        window.location.href = url;

    }

    static open(url) {

        window.open(url, "_blank");

    }

    static replace(url) {

        window.location.replace(url);

    }

    static reload() {

        location.reload();

    }

    static delay(url, ms = 3000) {

        setTimeout(() => {

            this.go(url);

        }, ms);

    }

}
