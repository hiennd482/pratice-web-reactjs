<!-- CÁCH CHẠY UNIT TEST TRONG PROJECT -->

#1: cài đặt thư viện(những thư viện cần thiết để run unit test đã được cài sẵn khi tạo project)

#2:run file unit test
-sử dụng dòng lệnh "npm run test" trên terminal.(câu lệnh này sẽ quét và chạy tất cả file có đuôi là .test.js )

<!-- CÁCH CHẠY SELENIUM TRONG PROJECT -->

#1: npm i

#2:npm start

#3:cd vào thư mục selenium trong terminal (..\src\selenium)

#4:khi đã vào đúng đường dẫn như trên thì chạy câu lệnh 'npm test'(câu lệnh này sẽ quét và chạy tất cả file có đuôi là .test.js )

<!-- CÁCH CHẠY SINGLE FILE TEST TRONG PROJECT -->

Để chạy đúng file mà mình mong muốn thì chúng ta cần chuyển đổi đường dẫn đúng thư mục của file đó,
vd:chạy file login.test.js :
-ta cần vào đúng thư mục như : `\src\pages\login\__tests__`.
-sau đó chạy câu lệnh "npm t -- login.test.js".

tương tự với những file test ta cũng làm những bước trên!

<!-- CÁCH TEST TRÊN TRÌNH DUYỆT FIRE FOX -->

#1 : npm i geckodriver
#2: require("geckodriver") vào file testall.test.js
#3: thay đổi 'chrome' thành 'firefox' trong forBrowser() vd : "forBrowser('firefox')"

<!-- HẾT! -->
