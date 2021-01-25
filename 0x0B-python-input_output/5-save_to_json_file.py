#!/usr/bin/python3
import json
'''
        Writes an Object to a text file
'''


def save_to_json_file(my_obj, filename=""):
    '''
        Writes an Object to a text file
    '''
    with open(filename, mode="w") as fd:
        json.dump(my_obj, fd)
