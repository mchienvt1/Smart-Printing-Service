# Task 1
## Task 1.1 
### 1.1.1 Domain context (Bối cảnh dự án) 
Để giúp sinh viên thuận tiện và nhanh chóng hơn trong việc in ấn các loại tài liệu học tập cũng như các giấy tờ quan trọng khác, trường Đại học Bách Khoa TPHCM có ý định xây dựng một dịch vụ in ấn thông minh dành cho sinh viên (HCMUT_SPSS). Hệ thống này sẽ sắp xếp hợp lý hóa quy trình in bằng cách tích hợp nhiều tính năng và chức năng khác nhau.  
Đối với người dùng: 
-	Sinh viên: Là đối tượng sử dụng chính của hệ thống và sử dụng dịch vụ in ấn để in tài liệu. 
-	Nhân viên dịch vụ in ấn sinh viên (SPSO): Vai trò này chịu trách nhiệm cấu hình và quản lý hệ thống, bao gồm cài đặt máy in, loại tệp được phép và các cấu hình hệ thống khác. 
Các tính năng và chức năng: 
-	In tài liệu: Học viên có thể tải file tài liệu của mình lên hệ thống và chọn máy in từ các tùy chọn có sẵn. Họ cũng có thể chỉ định các thuộc tính in như khổ giấy, in một mặt hoặc hai mặt, số lượng bản sao, v.v. 
-	Quản lý máy in: SPSO có quyền quản lý các máy in trong hệ thống. Điều này bao gồm việc thêm, bật hoặc tắt máy in nếu cần. 
-	Lịch sử in ấn: Hệ thống lưu giữ nhật ký các thao tác in ấn được thực hiện bởi tất cả học sinh. Nhật ký bao gồm các chi tiết như ID sinh viên, ID máy in, tên tệp, thời gian bắt đầu và kết thúc in cũng như số lượng trang cho mỗi kích thước trang. 
-	Xem nhật ký in: Cả học sinh và SPSO đều có thể truy cập lịch sử in để xem các hoạt động in trước đây. Học sinh có thể xem nhật ký in của mình trong một khoảng thời gian cụ thể, cùng với bản tóm tắt số trang đã in cho từng khổ trang. SPSO có thể xem lịch sử in của tất cả học sinh hoặc một học sinh cụ thể trong một khoảng thời gian nhất định và lọc nó dựa trên máy in được sử dụng. 
-	Số trang còn lại và các trang bổ sung: Mỗi học sinh được cung cấp một số trang khổ A4 mặc định để in trong mỗi học kỳ. Học sinh có thể mua thêm trang bằng tính năng "Mua trang in". Hệ thống đảm bảo rằng sinh viên chỉ có thể in trong giới hạn số trang của mình, vì một trang A3 tương đương với hai trang A4. 
-	Cấu hình hệ thống: SPSO có thể quản lý các cấu hình khác nhau của hệ thống, chẳng hạn như thay đổi số trang mặc định được phân bổ cho học sinh, xác định ngày chỉ định các trang mặc định và định cấu hình các loại tệp được phép được hệ thống chấp nhận. 
-	Báo cáo tự động: Báo cáo hàng tháng và hàng năm được hệ thống tạo tự động để cung cấp thông tin chi tiết về việc sử dụng in ấn. Các báo cáo này được lưu trữ trong hệ thống và SPSO có thể truy cập được. 
Xác thực và truy cập: 
-	Tất cả người dùng phải tự xác thực thông qua dịch vụ xác thực HCMUT_SSO trước khi truy cập vào hệ thống in thông minh. 
-	Hệ thống có thể được truy cập thông qua ứng dụng nền tảng web hoặc ứng dụng di động, đảm bảo tính linh hoạt và thuận tiện cho người dùng. 
### 1.1.2 Stakeholders and their needs (Những bên liên quan và nhu cầu của họ trong 
dự án) 
1.	Sinh viên trường đại học Bách Khoa: Nhu cầu hiện tại của sinh viên là cần một dịch vụ in ấn tiện lợi trong khuôn viên nhà trường. Họ muốn dùng các máy in ấn đó có thể chọn máy in và chỉ định các bước cài đặt như kích thước giấy, số mặt in, số bản sao. Đồng thời sinh viên có thể xem và theo dõi nhật ký in ấn của họ, biết được số trang còn lại trong tài khoản của họ và có khả năng mua thêm trang khi hết số lượng trang mặc định mà nhà trường cung cấp. 
2.	Quản lý dịch vụ in sinh viên (SPSO): Nhu cầu của quản lý dịch vụ in sinh viên là cần một hệ thống hiệu quả trong việc quản lý. Cần giao diện có thể theo dõi cách hoạt động in ấn và tạo báo cáo. Mong muốn có khả năng cấu hình lại hệ thống như giới hạn trang hoặc các loại tệp được cho phép in. Đồng thời mong muốn hỗ trợ và giải quyết các vấn đề sinh viên mắc phải liên quan đến dịch vụ in ấn. 
3.	Hệ thống thanh toán trực tuyến (BKPay): Nhu cầu của hệ thống thanh toán trực tuyến là cung cấp giao diện thân thiện và dễ dàng sử dụng để thực hiện các thao tác nạp tiền vào tải khoản, kiểm tra số trang dư và thanh toán cho dịch vụ in ấn. Phần mềm cần hộ trợ đa dạng thanh toán như sử dụng thẻ ngân hàng hay ví điện tử. Cung cấp được thống kê thanh toán bao gồm: số lượng giao dịch, số tiền nạp hoặc số tiền tiêu. Và đặc biệt phần mềm cần có các biện pháp bảo mật mạnh để đảm bảo an toàn thông tin cá nhân và các giao dịch của sinh viên.  
4.	Ban quản lý trường đại học Bách Khoa: Nhằm nâng cao trải nghiệm của sinh viên khi theo học tại trường.   
### 1.1.3 Stakeholders and their benefits (Những bên liên quan và lợi ích của họ trong 
dự án) 
1.	Sinh viên: sinh viên có thể dê dàng in ấn các tài liệu học tập, ôn tập; tiết kiệm được công sức và thời gian, in ấn các tài liệu theo yêu cầu cá nhân của bản thân một cách dễ dàng không cần thông qua bất kì ai. 
2.	Trường Đại học Bách khoa: quản lý dịch vụ in ấn sinh viên sử dụng. 
3.	SPSO: theo dõi, giám sát các thao tác, hoạt động của sinh viên một cách dễ dàng thông qua việc cập nhật trên hệ thống. 
4.	Công ty Y: đảm bảo một mức tiêu thụ ổn định các sản phẩm mà công ty cung cấp (máy in, mực in, giấy,...) 
5.	BKPay và Ngân hàng OCB: tăng các giao dịch trược tuyến. 
## Task 1.2  
### 1.2.1 Functional requirements (Yêu cầu chức năng) 
1. HCMUT_SSPS 
-	Cho phép sinh viên in ấn tài liệu đã được tải lên hệ thống 
-	Cho phép sinh viên chọn máy in và tùy chỉnh các thuộc tính in (kích thước giấy, số trang cần in, một mặt/hai mặt, số bản sao,…) 
-	Lưu lại nhật ký in ấn của tất cả sinh viên (gồm mã số sinh viên, mã số máy in, tên tệp, thời gian bắt đầu và kết thúc in, số trang cho mỗi kích thước trang). 
-	Cho phép SPSO xem lịch sử in ấn của tất cả sinh viên hoặc một sinh viên trong một khoảng thời gian và cho tất cả hoặc một số máy in. 
-	Cho phép in số lượng trang không vượt qua số dư trang trong hệ thống. 
-	Tự động tạo ra bản báo cáo nhật ký làm việc của máy in vào mỗi cuối tháng và cuối năm và lưu trong hệ thống.  
2. SPSO 
-	Cấu hình các loại tệp được cho phép in 
-	Truy cập ào nhật ký của tất cả sinh viên 
-	Mỗi kì học, cấp phát cho mỗi sinh viên một số lượng trang A4 mặc định 
-	Được quyền thêm, cho phép hoặc vô hiệu hóa máy in 
-	Quản lý cấu hình của hệ thống (thay đổi số trang mặc định phát cho sinh viên, nhày hệ thống sẽ phát số trang mặc định cho sinh viên, loại tập tin được chấp nhận bởi hệ thống) 
-	Xem nhật ký làm việc của máy in theo tháng và năm bất kì lúc nào  
-	Quản lý dịch vụ xác thực HCMUT_SS 
3. Sinh viên 
-	In ấn tài liệu  
-	Chọn máy in và tùy chỉnh các thuộc tính in 
-	Xem lịch sử in ấn của mình trong một khoảng thời gian cụ thể 
-	Mua thêm trang in qu tính năng “Buy Printing Pages” của hệ thống. 
-	Xác thực dịch vụ HCMUT_SSO trước khi sử dụng hệ thống 
### 1.2.2 Non-functional requirements (Yêu cầu phi chức năng) 
1. Hiệu suất 
-	Thời gian phản hồi yêu cầu và thời gian in nhanh, mất ít hơn 10 giây để xử lý yêu cầu và bắt đầu in. 
-	Chức năng của từng thao tác có độ phản hồi ít hơn 1 giây. 
-	Hệ thống có thể xử lý đồng thời 1000 yêu cầu in ấn ở cùng 1 thời điểm. 
2. Độ khả dụng 
- Hệ thống hoạt động 24/7. 
3. Độ tin cậy 
- Hệ thống hoạt động bình thường trong 95% trường hợp sử dụng trong 1 tháng. 
4. Bảo mật 
-	Khả năng xác thực: quá trình xác thực người dùng thông qua HCMUT_SSO phải bảo mật và được bảo vệ trước các truy cập trái phép. 
-	Dữ liệu: tất cả dữ liệu về người dùng bao gồm lịch sử in ấn và thông tin thanh toán phải được lưu trữ và truyền đi một cách án toàn. 
-	Quản lý tệp: hệ thống phải kiểm soát chặt chẽ các loại tệp được tải lên để đề phòng trước những rủi ro về bảo mật như malware,... 
5. Khả năng mở rộng 
-	Mở rộng phạm vi khách hàng của hệ thống ra cho cả giảng viên. 
-	Hệ thống có khả năng xử lý đồng thời 10000 yêu cầu in ấn mà vẫn duy trì hiệu suất tối ưu. 
6. Khả năng tương thích 
-	Cung cấp các API để tương tác với các ứng dụng thanh toán và upload file. 
-	Có thể sử dụng hệ thống trên web hoặc ứng dụng trên các hệ điều hành IOS và Android. 
7. Bảo trì 
-	Thời gian bảo trì hệ thống dưới 12 giờ.  
-	Thời gian báo lỗi và sửa lỗi khi gặp sự cố không quá 10 phút. 
-	Bảo trì hệ thống định kì (3 tháng/lần). 
8. Dễ sử dụng 
-	Cung cấp giao diện thân thiện với người dùng, nơi sinh viên có thể in ấn một cách hiệu quả. 
-	Giao diện dễ nhìn, dễ hiểu, có hướng dẫn sử dụng và các công cụ hỗ trợ hay gợi ý giúp việc in ấn thỏa ý muốn sinh viên - Sử dụng cả tiếng Việt và Anh. 
-	Cung cấp trình duyệt hỗ trợ việc in ấn và lấy ngay trong khuôn viên trường, sinh viên có thể tìm đến trang web hoặc ứng dụng để upload file và đến máy in gần nhất để in một cách nhanh chóng.  
-	Sinh viên có thể thao tác và yêu cầu in trong khoảng 5 phút. 
-	Những lần in gần nhất sẽ được lưu lại để thuận tiện cho việc tái in ấn. 
