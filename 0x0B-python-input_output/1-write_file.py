#!/usr/bin/python3
'''
		Writes a string to a text file
'''


def write_file(filename="", text=""):
	'''
		Writes a string to a text file
	'''
    with open(filename, mode="w") as fd:
        nbc = fd.write(text)
    return nbc
