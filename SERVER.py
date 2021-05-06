import os
import threading


def dev():
    s = os.system('cd server/view && node view.js')
    print(s)


def dev1():
    s = os.system('cd server && npm run dev')
    print(s)


if __name__ == "__main__":
    x1 = threading.Thread(target=dev)
    x1.start()
    x2 = threading.Thread(target=dev1)
    x2.start()