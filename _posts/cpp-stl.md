---
title: 'C++ STL in simple english please'
excerpt: 'Standard Template Library in C++ is a library which contains a set of data structure and algorithms already built in.'
coverImage: '/assets/blog/cpp-stl/cover.jpg'
date: 'September 9, 2020'
type: 'featured'
author:
  name: Saheb Giri
  picture: '/assets/blog/authors/sg.png'
ogImage:
  url: '/assets/blog/cpp-stl/cover.jpg'
---

Standard Template Library in C++ is a library which contains a set of data structure and algorithms already built in. You can use them as you like. It is based on template. So a little bit of template can be explained here.

## Template in C++

It is a way of representing classes and templates in more generic fashion, meaning you don't have to provide the data types explicitly. The functions or class finds the exact data type during the runtime just like macros.

```cpp
template <typename T>
T sum(T a, T b){
	return a+b;
}
```

You can use class instead of typename. During compile time, the above code can be translated to something like this if called in the main function.

```cpp
int main() {
std::cout<<sum<int>(2,5);
std::cout<<sum<float>(2.4f,5.6f);

return 0;
}
```

sum<int> convert into something like this:

```cpp
int sum(int a, int b){
	return a+b;
}
```

And sum<float > translated into something like this.

```cpp
float sum(float a, float b){
	return a+b;
}
```

Now coming back to the topic of STL, it is generally divided into four types. 1. Algorithm 2. Container 3. Functors 4. Iterators

## Algorithm

C++ provides almost all algorithms that you might need in your coding interview. Using home made algo is not a very good choice. This is because your implementation might contain bugs and may not be the most efficient and optimized algo. It contains sorting, searching, merging ,etc. with time complexity of O(n log n). To sort an vector, you can do something like this -

```cpp
std::vector<int> v { 2,5,7,6 };
Sort(v.begin(), v.end());
```

## Container

Containers are the data structure that holds the data. In STL, containers are of seven first class containers(three sequential containers and four associative containers) and three adopters. There are 7 headers to access them all which is illustrated below:

<div>

| Classes    | Name of containers    | Types       |
| ---------- | --------------------- | ----------- |
| `<vector>` | vector                | Sequential  |
| `<deque>`  | deque                 | Sequential  |
| `<list>`   | list                  | Sequential  |
| `<map>`    | Map, multimap         | Associative |
| `<set>`    | Set, multiset         | Associative |
| `<stack>`  | stack                 | Adopter     |
| `<queue>`  | Queue, priority_queue | Adopter     |

</div>

## Functors

Though functors are not used that much but it's good to know them as part of stl. I found an article in GeeksForGeeks that will help you understand the concept much better.
[GeeksForGeeks Functors](https://www.geeksforgeeks.org/functors-in-cpp/)

## Iterators

Iterators are objects like pointers which point to the memory address of the node of a data structure. They are used to move from one element to another in a container in C++. They are crucial because It prevents accidental access to undefined index of array or vector. As a result helps in preventing Segmentation Fault error.

```cpp
vector<int> v { 1, 6, 8};
v.begin()
```

Here `v.begin()` pointing to the first element of the vector v;
