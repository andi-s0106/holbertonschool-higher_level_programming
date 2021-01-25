#!/usr/bin/python3
'''
    appends a string at the end of a text file
'''


def append_write(filename="", text=""):
    '''
    appends a string at the end of a text file
    '''
    with open(filename, mode="a") as fd:
        x = fd.write(text)
    return x
