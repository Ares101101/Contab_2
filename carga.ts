import { invoke } from '@tauri-apps/api/core'

document.addEventListener('DOMContentLoaded', () => {
    // This will wait for the window to load, but you could
    // run this function on whatever trigger you want
    invoke('close_splashscreen')
})          