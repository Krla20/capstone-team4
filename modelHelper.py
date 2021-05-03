import pandas as pd
import datetime
import time
import pickle
import numpy as np

class ModelHelper():
    def __init__(self):
        pass

    def makePredictions(self, carat, cut, color, clarity, tdepth, table, length, width, depth):
        
        input_pred = [[carat, cut, color, clarity, tdepth, table, length, width, depth]]


        filename = './model/finalized_model.sav'
        ada_load = pickle.load(open(filename, 'rb'))

        X = np.array(input_pred)
        # preds = ada_load.predict_proba(X)
        preds_singular = ada_load.predict(X)
        final = "{:,.2f}".format(preds_singular[0])
        return final