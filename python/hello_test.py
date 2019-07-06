import unittest

from hello import email
from hello import taxes

class TestEmail(unittest.TestCase):
    def test_email(self):
        self.assertEqual(email("nilou","naderi"),"nilou.naderi@evolveu.ca")

    def test_taxes(self):
        self.assertEqual(taxes(35000), 5250)
        self.assertEqual(taxes(85000), 14805.85)
        self.assertEqual(taxes(127000), 25160.66)
        self.assertEqual(taxes(325000), 86546.57)

if __name__ == '__main__':
    unittest.main()
