#include <iostream>


using namespace std;

// You should define Pair here:
class Pair {
  public:
    int a;
    int b;
    int sum() {
      return a + b;
    };
};

// Click Run to see what happens.
// When you're sure you're finished, click Submit for grading
// with our additional hidden tests.
int main() {
  Pair p;
  p.a = 100;
  p.b = 200;
  if (p.a + p.b == p.sum()) {
    std::cout << "Success!" << std::endl;
    std::cout << p.sum();
  } else {
    std::cout << "p.sum() returns " << p.sum() << " instead of " << (p.a + p.b) << std::endl;
  }
  return 0;
}