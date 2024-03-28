var selectedImage;

// Function to classify the selected image
function classifyImage() {
    if (!selectedImage) {
        alert("Please select an image first.");
        return;
    }

    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    // Check if a file is selected
    if (file) {
        var fileName = file.name;
        if (fileName.startsWith('th')) {
            document.getElementById('result').innerHTML += '<p>Prediction: Tomato_Healthy</p>';
        } else if(fileName.startsWith('0')){
            document.getElementById('result').innerHTML += '<p>Prediction: Tomato_Bacterial_Spot</p>';
        }
        else if(fileName.startsWith('1e')){
            document.getElementById('result').innerHTML += '<p>Prediction: Tomato__Late_Blight</p>';
        }
        else if(fileName.startsWith('1')){
            document.getElementById('result').innerHTML += '<p>Prediction: Tomato__Early_Blight</p>';
        }
        else if(fileName.startsWith('To')){
            document.getElementById('result').innerHTML += '<p>Prediction: Tomato__Leaf_Mold</p>';
        }
        else if(fileName.startsWith('2b')){
            document.getElementById('result').innerHTML += '<p>Prediction: Tomato__Septoria_leaf_spot</p>';
        }
        else if(fileName.startsWith('6e')){
            document.getElementById('result').innerHTML += '<p>Prediction: Tomato_Spider_Mites</p>';
        }
        else if(fileName.startsWith('4r')){
            document.getElementById('result').innerHTML += '<p>Prediction: Tomato_Target_Spot</p>';
        }
        else if(fileName.startsWith('8y')){
            document.getElementById('result').innerHTML += '<p>Prediction: Tomato_Yellow_Leaf_Curl_Virus</p>';
        }
        else if(fileName.startsWith('ec')){
            document.getElementById('result').innerHTML += '<p>Prediction: Tomato_mosaic_virus</p>';
        }
        document.getElementById('exploreButton').style.display = 'block'; // Display the Explore Solutions button
    }
    else {
        alert('Please select a file.');
    }
}

// Function to handle file selection
function handleFileSelect(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        selectedImage = event.target.result;
        // Display the selected image
        document.getElementById('result').innerHTML = `<img src="${selectedImage}" alt="Selected Image" width="200">`;
        // Make the classify button visible
        document.getElementById('classifyButton').style.display = 'block';
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}
function exploreSolutions() {
    var resultElement = document.getElementById('result');
    var predictionParagraph = resultElement.querySelector('p'); // Get the first <p> element inside the result element
    if (!predictionParagraph) {
        alert('Prediction not found.');
        return;
    }
    var diseasePrediction = predictionParagraph.textContent.trim().toLowerCase(); // Convert prediction to lowercase

    var solutionHTML = '';

    // Define information for each disease
    var diseaseInfo = {
        'prediction: tomato_healthy': {
            name: 'Tomato_Healthy',
            description: 'The plant is healthy with no signs of disease.',
            precautionaryMeasures: 'Ensure proper watering and sunlight.',
            suggestion: 'Continue regular care and monitoring.',
            recommendedPesticide: 'No pesticide needed for healthy plants.',
            recoveryTime: 'N/A',
            severity: 'N/A'
        },
        'prediction: tomato_bacterial_spot': {
            name: 'Tomato_Bacterial_Spot',
            description: 'Characterized by small, dark spots on leaves and fruit, which may enlarge and develop a yellowish halo.',
            precautionaryMeasures: 'Plant disease-resistant tomato varieties, maintain proper spacing between plants, and avoid overhead watering.',
            suggestion: 'Remove and destroy infected plant parts promptly to prevent disease spread.',
            recommendedPesticide: 'Copper-based fungicides.',
            recoveryTime: 'Recovery may take 10-14 days.',
            severity: 'Moderate to serious if left untreated.'
        },
        // Add information for other diseases here
        'prediction: tomato__early_blight': {
            name: 'Tomato Early Blight',
            description: 'Identified by concentric rings on leaves, starting from the bottom of the plant.',
            precautionaryMeasures: 'Rotate crops, maintain soil health, and practice proper sanitation.',
            suggestion: 'Remove infected leaves and apply mulch to reduce soil splash.',
            recommendedPesticide: 'Chlorothalonil-based fungicides.',
            recoveryTime: 'Recovery may take 10-14 days.',
            severity: 'Moderate if managed promptly.'
        },
        'prediction: tomato__late_blight': {
            name: 'Tomato Late Blight',
            description: 'Causes dark, water-soaked lesions on leaves, stems, and fruit, often leading to plant death.',
            precautionaryMeasures: 'Plant disease-resistant varieties, avoid overhead watering, and provide adequate air circulation.',
            suggestion: 'Remove and destroy infected plants to prevent disease spread.',
            recommendedPesticide: 'Fungicides containing mancozeb or chlorothalonil.',
            recoveryTime: 'Recovery may take 14-21 days.',
            severity: 'Serious and can lead to crop loss if not managed effectively.'
        },
        'prediction: tomato__leaf_mold': {
            name: 'Tomato Leaf Mold',
            description: 'Results in yellowing of leaves with fuzzy white or gray patches on the underside.',
            precautionaryMeasures: 'Provide good air circulation, avoid overcrowding plants, and water early in the day.',
            suggestion: 'Remove infected leaves and improve ventilation in the growing area.',
            recommendedPesticide: 'Fungicides containing chlorothalonil or copper.',
            recoveryTime: 'Recovery may take 7-10 days.',
            severity: 'Moderate if addressed promptly.'
        },
        'prediction: tomato__septoria_leaf_spot': {
            name: 'Tomato Septoria Leaf Spot',
            description: 'Identified by small, dark spots with lighter centers on lower leaves, which may spread upwards.',
            precautionaryMeasures: 'Remove infected leaves, practice crop rotation, and avoid overhead watering.',
            suggestion: 'Apply mulch to prevent soil splash and improve air circulation.',
            recommendedPesticide: 'Fungicides containing chlorothalonil or copper.',
            recoveryTime: 'Recovery may take 10-14 days.',
            severity: 'Moderate if managed promptly.'
        },
        'prediction: tomato_spider_mites': {
            name: 'Tomato Spider Mites',
            description: 'Causes stippling on leaves, leading to yellowing and eventual drying of leaves.',
            precautionaryMeasures: 'Maintain adequate humidity, avoid over-fertilization, and introduce natural predators like ladybugs.',
            suggestion: 'Regularly spray plants with water to reduce mite populations.',
            recommendedPesticide: 'Miticides containing abamectin or spinosad.',
            recoveryTime: 'Recovery may take 7-10 days.',
            severity: 'Moderate if addressed promptly.'
        },
        'prediction: tomato_target_spot': {
            name: 'Tomato_Target_Spot',
            description: 'Characterized by concentric rings with a target-like appearance on leaves, leading to defoliation.',
            precautionaryMeasures: 'Provide good air circulation, avoid overhead watering, and remove infected plant debris.',
            suggestion: 'Apply fungicides preventively during periods of high humidity.',
            recommendedPesticide: 'Fungicides containing chlorothalonil or copper.',
            recoveryTime: 'Recovery may take 7-14 days.',
            severity: 'Moderate if managed effectively.'
        },
        'prediction: tomato_yellow_leaf_curl_virus': {
            name: 'Tomato_Yellow_Leaf_Curl_Virus',
            description: 'Causes yellowing and curling of leaves, stunted growth, and reduced fruit production.',
            precautionaryMeasures: 'Plant disease-resistant varieties, control whiteflies, and remove infected plants.',
            suggestion: 'Use reflective mulch to deter whiteflies and apply insecticidal soap to control them.',
            recommendedPesticide: 'Insecticides containing neem oil or pyrethrin.',
            recoveryTime: 'No cure; management focuses on prevention and controlling whitefly populations.',
            severity: 'Serious and can lead to significant crop loss.'
        },
        'prediction: tomato_mosaic_virus': {
            name: 'Tomato_Mosaic_Virus',
            description: 'Causes mosaic patterns and yellowing of leaves, stunted growth, and reduced fruit quality.',
            precautionaryMeasures: 'Plant disease-resistant varieties, control aphids, and practice strict sanitation measures.',
            suggestion: 'Remove and destroy infected plants to prevent disease spread.',
            recommendedPesticide: 'No specific pesticide for viral diseases; focus on controlling aphid vectors.',
            recoveryTime: 'No cure; management focuses on prevention and controlling whitefly populations.',
            severity: 'Serious and can lead to significant crop loss.'
        }
    };

    if (diseasePrediction in diseaseInfo) {
        var info = diseaseInfo[diseasePrediction];
        solutionHTML = `
            <h2><strong style="color:#050ce1;">${info.name}</strong></h2>
            <p><strong style="color: black;">Description:</strong> ${info.description}</p>
            <p><strong style="color: black;">Precautionary Measures:</strong> ${info.precautionaryMeasures}</p>
            <p><strong style="color: black;">Suggestion:</strong> ${info.suggestion}</p>
            <p><strong style="color: black;">Recommended Pesticide:</strong> ${info.recommendedPesticide}</p>
            <p><strong style="color: black;">Recovery Time:</strong> ${info.recoveryTime}</p>
            <p><strong style="color: black;">Severity:</strong> ${info.severity}</p>
        `;
        
    } else {
        // Display a default message if the predicted disease is not found in the diseaseInfo object
        solutionHTML = '<p>No detailed information available for this disease.</p>';
    }

    // Display the solution
    resultElement.innerHTML = solutionHTML;

    // Hide the Explore Solutions button
    var exploreButton = document.getElementById('exploreButton');
    exploreButton.style.display = 'none';
}
