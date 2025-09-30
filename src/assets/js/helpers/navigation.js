/**
 * Redirect by URL.
 * @param {string | URL} url Url to be redirected.
 * @param {string} target Values: `""` or `"_blank"`.
 */
export function redirectTo(url, target="_blank") {
    window.open(url, target)
}
