#!/usr/bin/python3
import json
'''
        Creates an Object from a “JSON file”
'''


def load_from_json_file(filename=""):
'''
        Creates an Object from a “JSON file”
'''
    with open(filename, encoding="utf-8") as fd:
        my_obj = json.load(fd)

    return my_obj
