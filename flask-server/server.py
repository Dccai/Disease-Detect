from flask import Flask,request
import pandas as pd
import numpy as np
import sys
import tensorflow as tf
from flask_cors import CORS
app=Flask(__name__)
cors=CORS(app)
@app.route('/diseaseDetector',methods=['POST'])
def diseaseDetector():
    diseases=['(vertigo) Paroymsal  Positional Vertigo', 'AIDS', 'Acne', 'Alcoholic hepatitis', 'Allergy', 'Arthritis', 'Bronchial Asthma', 'Cervical spondylosis', 'Chicken pox', 'Chronic cholestasis', 'Common Cold', 'Dengue', 'Diabetes ', 'Dimorphic hemmorhoids(piles)', 'Drug Reaction', 'Fungal infection', 'GERD', 'Gastroenteritis', 'Heart attack', 'Hepatitis B', 'Hepatitis C', 'Hepatitis D', 'Hepatitis E', 'Hypertension ', 'Hyperthyroidism', 'Hypoglycemia', 'Hypothyroidism', 'Impetigo', 'Jaundice', 'Malaria', 'Migraine', 'Osteoarthristis', 'Paralysis (brain hemorrhage)', 'Peptic ulcer diseae', 'Pneumonia', 'Psoriasis', 'Tuberculosis', 'Typhoid', 'Urinary tract infection', 'Varicose veins', 'hepatitis A']
    X=np.array([request.json['data']])
    model=tf.keras.models.load_model("diseasedetect.keras")
    results=np.argmax(model.predict(X),axis=-1)
    return {"result":diseases[results[0]]}
if __name__=='__main__':
    app.run(debug=True)