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

## Task 1.3 
### 1.3.1 Use-case diagram for whole system  
![whole system uc diagram](/Picture/whole_system_uc_diagram.png?raw=true)
### 1.3.2 Use-case diagram for important module 
| No. | Use-case                      | Job Description                                                         |
|-----|-------------------------------|-------------------------------------------------------------------------|
| 1   | Upload file                   | Cho phép sinh viên tải tài liệu cần in lên ứng dụng.                     |
| 2   | Choose printer                | Cho phép sinh viên chọn máy in available mà hệ thống đề xuất.            |
| 3   | Modified printing             | Cho phép sinh viên chỉnh sửa các thông số trước khi in.                  |
| 4   | Printing preview              | Hiển thị bản xem trước tài liệu trước khi in.                            |
| 5   | Buy pages for printing        | Dùng để sinh viên mua thêm trang in trong trường hợp không có đủ trang dư.|
| 6   | Log in/out                    | Dùng để người dùng đăng nhập/đăng xuất tài khoản.                        |
| 7   | Configure the system settings | Dùng để SPSO định cấu hình cài đặt hệ thống.                              |
| 8   | Manage printers               | Dùng để SPSO kiểm soát các máy in như thêm, xoá, tắt máy in.              |
| 9   | View students’ printing history | Dùng để SPSO xem lịch sử in của tất cả sinh viên hoặc một số sinh viên cụ thể. |
| 10  | View monthly/annual reports | Dùng để SPSO xem các báo cáo về việc sử dụng hệ thống in hàng tháng và hàng năm. |

 
## 1.3.3 Use-case diagram for important module 
![printing uc diagram](/Picture/printing_uc_diagram.png?raw=true)
1.3.4 Job description  
| No. | Use-case                           | Description                                                                        |
|-----|------------------------------------|------------------------------------------------------------------------------------|
| 1   | Upload new file (Tải file mới)      | Tạo một file mới và tải lên hệ thống để in.                                        |
| 2   | Upload file from history (Tải file từ lịch sử) | Sinh viên chọn file trong lịch sử đã in để in.                                     |
| 3   | Choose section to print (Chọn phần in) | Sinh viên có thể chọn trang bắt đầu và trang kết thúc để in.                          |
| 4   | Search printer (Tìm kiếm máy in)     | Sinh viên có thể tìm một máy in cụ thể dựa vào các thông tin như địa điểm, ID máy in, thương hiệu máy in hoặc mẫu máy. |
| 5   | Choose printer (Chọn máy in)         | Sinh viên có thể chọn một máy in từ danh sách máy in có sẵn để in tài liệu.           |
| 6   | Check printer status (Kiểm tra trạng thái máy in) | Sinh viên hoặc SPSO có thể biết được trạng thái của máy in.                        |
| 7   | Modified printing (Chỉnh thông số in) | Sinh viên chỉnh thông số của file in.                                               |
| 8   | Print preview (Xem tước bản in)     | Sinh viên xem trước bản in trước khi xác nhận in.                                   |
| 9   | Buy pages (Mua thêm trang)           | Sinh viên có thể mua thêm trang in bằng BK Pay hoặc ví Momo.                         |
| 10  | View printing history (Xem lịch sử in) | Sinh viên có thể xem lại lịch sử in ấn của bản thân.                                 |
 
## 1.3.5 Use-case scenario 
Upload new file (Tải file mới) 
| Use-case Name         | Upload new file (Tải file mới)                               |
|-----------------------|--------------------------------------------------------------|
| Actor                 | Sinh viên                                                    |
| Trigger               | Sinh viên nhấn vào mục “Tải file”                            |
| Description           | Tạo một file mới và tải lên hệ thống để in                   |
| Preconditions        | - Sinh viên đã đăng nhập vào hệ thống <br> - Thiết bị của sinh viên có thể kết nối với internet và hệ thống |
| Postcondition         | - Hệ thống tải lên một file mới hoàn toàn                     |
| Normal flow           | 1. Sinh viên chọn mục “Tải file” <br>2. Hệ thống mở ra giao diện chọn file để tải lên <br>3. Sinh viên chọn file cần tải lên <br>4. Sinh viên bấm nút xác nhận           |                      
| Alternative flows     | 1. Ở bước 2.1, sinh viên có thể truy cập giao diện web do hệ thống in cung cấp và tải trực tiếp các tệp lên từ máy tính hoặc bộ lưu trữ đám mây của họ (ví dụ: Dropbox, Google Drive,...) <br> 2. Ở bước 2.2, sinh viên có thể kéo và thả file vào vùng được chỉ định trên giao diện web để tải lên nhanh chóng |
| Exceptions            | Exception 1: Tại bước 5, quá trình tải lên file thất bại vì định dạng của file không hợp lệ |

	
Upload file from history (Tải file từ lịch sử) 
| Use-case Name         | Upload file from history (Tải file từ lịch sử) |
|-----------------------|------------------------------------------------|
| Actor                 | Sinh viên                                      |
| Trigger               | Sinh viên nhấn chọn nút "Tải file từ lịch sử"   |
| Description           | Sinh viên chọn file trong lịch sử đã in để in   |
| Preconditions        | - Hệ thống đang hoạt động<br>- Cơ sở dữ liệu đang kết nối với SSPS<br>- Kết nối internet có sẵn<br>- Sinh viên đăng nhập và xác thực thành công |
| Postcondition         | Không có                                       |
| Normal flow           | 1. Sinh viên chọn nút "Tải file từ lịch sử" để chọn file cần in<br>2. Hệ thống hiển thị giao diện lịch sử gồm một danh sách các file đã in<br>3. Sinh viên tích chọn các file cần in<br>4. Sinh viên nhấn nút "Chọn" để chọn các file |
| Alternative flows     | - Sau bước 2, hệ thống hiển thị 3 nút "Chọn", "Hủy" và "Upload new file":<br>2.2. Sinh viên chọn nút "Hủy" nếu không tìm thấy file cần in<br>2.3. Sinh viên chọn nút "Tải file" để tải file mới |
| Exceptions            | Không có                                       |
 
Choose section to print (Chọn phần in) 
| Use-case Name         | Choose section to print (Chọn phần in) |
|-----------------------|--------------------------------------|
| Actor                 | Sinh viên                            |
| Trigger               | Sinh viên nhấn vào mục "Chọn phần in" |
| Description           | Sinh viên có thể chọn trang bắt đầu và trang kết thúc để in |
| Preconditions        | - Sinh viên đã đăng nhập vào hệ thống và có quyền truy cập chức năng "Tải file"<br>- Thiết bị của sinh viên có thể kết nối với internet và hệ thống<br>- Sinh viên đã chọn file muốn in |
| Postcondition         | Không có |
| Normal flow           | 1. Sinh viên chọn mục "Chọn phần in" sau khi đã chọn file<br>2. Hệ thống mở ra giao diện để chọn section<br>3. Sinh viên nhập số trang bắt đầu và số trang kết thúc<br>4. Sinh viên bấm nút "Chọn" để xác nhận |
| Alternative flows     | Không có |
| Exceptions            | Exception 1: Tại bước 5, hệ thống sẽ báo lỗi khi nhập số trang bắt đầu và kết thúc không hợp lệ |

Search printer (Tìm kiếm máy in) 
| Use-case Name         | Search printer (Tìm kiếm máy in) |
|-----------------------|---------------------------------|
| Actor                 | Sinh viên                       |
| Trigger               | Sinh viên cần tìm một máy in cụ thể ở trong khuôn viên trường |
| Description           | Sinh viên có thể tìm một máy in cụ thể dựa vào các thông tin như địa điểm, ID máy in, thương hiệu máy in hoặc mẫu máy |
| Preconditions        | - Sinh viên đã đăng nhập thành công vào hệ thống<br>- Sinh viên đã tải tài liệu cần in lên hệ thống |
| Postconditions         | Sinh viên đã tìm được máy in phù hợp |
| Normal flow           | 1. Sinh viên chọn mục "Tìm máy in" nếu cần tìm máy in phù hợp trong khuôn viên trường<br>2. Hệ thống hiển thị giao diện tìm kiếm với nhiều tiêu chí tìm kiếm như: Địa điểm, ID máy in, thời gian chờ<br>3. Sinh viên nhập các tiêu chí để tìm máy in<br>4. Hệ thống sau đó hiển thị kết quả tìm kiếm dựa trên các tiêu chí sinh viên đã nhập và đưa ra danh sách các máy in phù hợp<br>5. Sinh viên xem qua các kết quả trong danh sách và chọn máy in phù hợp với mình nhất |
| Alternative flows     | Không có |
| Exceptions            | Exception 1: Tại bước 4, có lỗi hệ thống trong quá trình tìm kiếm, hệ thống phải đưa ra thông báo lỗi và đề nghị sinh viên thử lại<br>Exception 2: Tại bước 4, sinh viên không tìm thấy máy in phù hợp ở danh sách, hệ thống sẽ đưa ra thông báo không tìm ra máy in phù hợp với yêu cầu và điều chỉnh lại các tiêu chí tìm kiếm |ra thông báo không tìm ra máy in phù hợp với yêu cầu và điều chỉnh lại các tiêu chí tìm kiếm |

Choose printer (Chọn máy in) 
| Use-case Name         | Choose printer (Chọn máy in) |
|-----------------------|------------------------------|
| Actor                 | Sinh viên                    |
| Trigger               | Sinh viên đã tải tài liệu lên hệ thống và cần chọn máy in |
| Description           | Sinh viên có thể chọn một máy in từ danh sách máy in có sẵn để in tài liệu |
| Preconditions        | - Sinh viên đã đăng nhập thành công vào hệ thống<br>- Sinh viên đã tải tài liệu cần in lên hệ thống |
| Postconditions         | - Sinh viên đã chọn thành công máy in<br>- Hệ thống xác nhận máy in đã được chọn |
| Normal flow           | 1. Hệ thống mở ra giao diện gồm danh sách các máy in có sẵn cho sinh viên<br>2. Sinh viên xem thông tin của máy in từ danh sách trên<br>3. Sinh viên chọn máy in từ danh sách<br>4. Sinh viên xác nhận lại máy in đã chọn<br>5. Hệ thống ghi nhận lại lựa chọn của sinh viên |
| Alternative flows     | Không có |
| Exceptions            | Exception 1: Tại bước 2, có lỗi hệ thống trong quá trình hiển thị danh sách máy in có sẵn, hệ thống phải đưa ra thông báo lỗi và đề nghị sinh viên thử lại<br>Exception 2: Tại bước 3, máy in đã được chọn đã có sẵn hoặc gặp phải lỗi, hệ thống phải thông báo cho sinh viên và đưa ra yêu cầu thay thế như chọn máy in khác hoặc hủy việc in ấn |

Check printer status (Kiểm tra trạng thái máy in) 
| Use-case Name         | Check printer status (Kiểm tra trạng thái máy in) |
|-----------------------|------------------------------------------------|
| Actor                 | Sinh viên                                       |
| Trigger               | Sinh viên hoặc SPSO muốn biết trạng thái hiện tại của một máy in cụ thể |
| Description           | Sinh viên hoặc SPSO có thể biết được trạng thái của máy in |
| Preconditions        | - Sinh viên hoặc SPSO đã đăng nhập thành công vào hệ thống |
| Postconditions         | - Sinh viên hoặc SPSO đã có được thông tin về trạng thái hiện tại của máy in đã chọn |
| Normal flow           | 1. Sinh viên chọn mục "Kiểm tra trạng thái máy in" để xem trạng thái hiện tại của một máy in xác định<br>2. Hệ thống hiển thị giao diện bao gồm danh sách các máy in để sinh viên hoặc SPSO có thể kiểm tra<br>3. Sinh viên hoặc SPSO chọn một máy in từ danh sách để kiểm tra<br>4. Hệ thống sau đó hiển thị thông tin về trạng thái hiện tại của máy in<br>5. Dựa vào thông tin trạng thái, sinh viên có thể đưa ra lựa chọn máy in nào để sử dụng, hoặc SPSO có thể thực hiện bảo trì hoặc sửa chữa<br>6. Nếu sinh viên hoặc SPSO xác định được máy in cần sử dụng, chọn "Chọn máy in" để tương tác với máy in đã chọn |
| Alternative flows     | Không có |
| Exceptions            | Exception 1: Nếu có lỗi hệ thống trong quá trình nhận thông tin về trạng thái, hệ thống phải đưa ra thông báo lỗi và đề nghị sinh viên hoặc SPSO thử lại |

Modified printing (Chỉnh thông số in)  
| Use-case Name         | Modified printing (Chỉnh thông số in) |
|-----------------------|---------------------------------------|
| Actor                 | Sinh viên                             |
| Trigger               | Sinh viên chọn nút "Chỉnh tệp"         |
| Description           | Sinh viên chỉnh thông số của file in   |
| Preconditions        | - Hệ thống đang hoạt động<br>- Cơ sở dữ liệu đang kết nối với SSPS<br>- Kết nối internet có sẵn<br>- Sinh viên đăng nhập và xác thực thành công<br>- Sinh viên đã tải file cần in |
| Postconditions         | Không có |
| Normal flow           | 1. Sinh viên chọn tệp cần chỉnh sửa các thông số in<br>2. Chọn nút "Chỉnh tệp"<br>3. Hệ thống hiện hộp thoại chỉnh sửa<br>4. Sinh viên cập nhật, lựa chọn các thông số theo mong muốn<br>5. Sinh viên nhấn nút "Hoàn thành" để kết thúc quá trình chỉnh |
| Alternative flows     | 5.1. Sau bước 5, nếu sinh viên muốn chỉnh lại thông số hoặc hộp thoại chỉnh:<br>   Sinh viên chọn nút "Chỉnh tệp" để tiếp tục chỉnh sửa các thông số<br>5.2. Sinh viên chọn nút "Làm mới", hệ thống hiện hộp thoại chỉnh sửa mới, sinh viên tiếp tục chỉnh sửa |
| Exceptions            | Không có |

Print preview (Xem trước bản in)  
| Use-case Name         | Print preview (Xem trước bản in) |
|-----------------------|---------------------------------|
| Actor                 | Sinh viên                       |
| Trigger               | Sinh viên chọn nút "Xem trước"   |
| Description           | Sinh viên xem trước bản in trước khi xác nhận in |
| Preconditions        | - Hệ thống đang hoạt động<br>- Cơ sở dữ liệu đang kết nối với SSPS<br>- Kết nối internet có sẵn<br>- Sinh viên đăng nhập và xác thực thành công<br>- Sinh viên đã tải file cần in |
| Postconditions         | Không có |
| Normal flow           | 1. Sinh viên chọn tệp cần xem<br>2. Sinh viên chọn nút "Xem trước"<br>3. Hệ thống trình bày bản in<br>4. Sinh viên chọn nút "In" để in tệp để in |
| Alternative flows     | - Ở bước số 1, sinh viên có thể chọn tệp đã tải lên hoặc chọn nút "Xem trước" sau khi đã hoàn thành Chỉnh thông số in<br>- Sau bước số 3, hệ thống trình bày 2 nút để lựa chọn: "Chỉnh sửa" và "In":<br>   3.1. Sinh viên chọn nút "Chỉnh sửa" để thay đổi các thông số in<br>   3.2. Sinh viên chọn nút "Xem trước" để xem bản in<br>   3.3. Sinh viên chọn nút "In" để in |
| Exceptions            | Không có |

Buy pages (Mua thêm trang) 
| Use-case Name         | Buy pages (Mua thêm trang) |
|-----------------------|----------------------------|
| Actor                 | Sinh viên, BK Pay, Momo   |
| Trigger               | Sinh viên chọn nút "Mua thêm trang" |
| Description           | Sinh viên có thể mua thêm trang in bằng BK Pay hoặc ví Momo |
| Preconditions        | - Hệ thống đang hoạt động<br>- Cơ sở dữ liệu đang kết nối với SSPS<br>- Kết nối internet có sẵn<br>- Sinh viên đăng nhập và xác thực thành công<br>- Sinh viên đã tải file cần in và chọn in file |
| Postconditions         | Không có |
| Normal flow           | 1. Hệ thống thông báo số trang in mà sinh viên cần mua thêm để in<br>2. Sinh viên chọn nút "Mua thêm trang"<br>3. Hệ thống trình bày hộp thoại mua trang và thông báo số tiền mà sinh viên cần trả<br>4. Sinh viên chọn nút "BK Pay" hoặc "Momo" để thực hiện thanh toán<br>5. Sinh viên nhập các thông tin cần thiết theo yêu cầu của hệ thống để thực hiện giao dịch<br>6. Sinh viên chọn nút "Xác nhận" để xác nhận giao dịch |
| Alternative flows     | - Sau bước số 1, hệ thống trình bày 2 nút "Mua thêm trang" và nút "Hủy"<br>   2.1. Sinh viên chọn nút "Hủy" để hủy in tệp |
| Exceptions            | Không có |

View printing history (Xem lịch sử in) 
| Use-case Name         | View Printing history (Xem lịch sử in) |
|-----------------------|---------------------------------------|
| Actor                 | Sinh viên                             |
| Trigger               | Sinh viên nhấn chọn nút "Xem lịch sử in" |
| Description           | Sinh viên có thể xem lại lịch sử in ấn của bản thân |
| Preconditions        | - Hệ thống đang hoạt động<br>- Cơ sở dữ liệu đang kết nối với SSPS<br>- Kết nối internet có sẵn<br>- Sinh viên đăng nhập và xác thực thành công |
| Postconditions         | Không có |
| Normal flow           | 1. Sinh viên nhấn chọn nút "Xem lịch sử in" để xem lại lịch sử in của bản thân<br>2. Hệ thống hiển thị lịch sử in của sinh viên (gồm các thông số: Ngày, giờ, tên file, mã số máy in đã in,...)<br>3. Sinh viên chọn nút "Đóng" để kết thúc quá trình xem |
| Alternative flows     | Không có |
| Exceptions            | Không có |
 
 	  
