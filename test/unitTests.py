import unittest

# TODO idk how we're gonna do unit tests

class TestStringMethods(unittest.TestCase):
    def basic_test(self):
        self.assertEqual("helllo", "world")

if __name__ == '__main__':
    unittest.main()