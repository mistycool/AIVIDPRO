// Multi-Language Switcher
document.getElementById("language-select").addEventListener("change", function () {
    alert("Language switched to: " + this.value);
});

// Show Selected Feature
function showFeature(featureId) {
    document.querySelectorAll('.feature-box').forEach(box => box.style.display = 'none');
    document.getElementById(featureId).style.display = 'block';
}

// AI Motion Detector (Mock)
function processMotionVideo() {
    alert("Processing AI Motion Detector...");
}

// AI Text-to-Speech Video (Mock)
function generateTTSVideo() {
    let text = document.getElementById("ttsInput").value;
    alert("Generating AI Voice Video: " + text);
}

// AI Video from Text (Mock)
function generateAITextVideo() {
    let description = document.getElementById("videoTextInput").value;
    alert("Creating AI-Generated Video for: " + description);
}
