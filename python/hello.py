print("Hello World!")

def email(fname,lname):
    return f"{fname}.{lname}@evolveu.ca"
print(email("nilou","naderi"))

def taxes(income):
    if income <= 47630:
        return round(income * .15, 2)
    elif income <= 95259:
        return round((income - 47630) * .205 + 7145, 2)
    elif income <= 147667:
        return round((income - 95259) * .26 + 16908, 2)
    elif income <= 210371:
        return round((income - 147667) * .29 + 30535, 2)
    else:
        return round((income - 210371) * .33 + 48719, 2)
