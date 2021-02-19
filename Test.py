import unittest


class Testing(unittest.TestCase):
    def test_blank(self):
        pass
    
    def test_fail(self):
        self.assertTrue(False)
    
if __name__ == '__main__':
    unittest.main()
