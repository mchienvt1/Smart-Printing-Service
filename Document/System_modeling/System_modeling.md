# Task 2
## 2.1
### 2.1.1 Activity diagrams
![printing activity diagram](/Picture/printing_activity_diagram.png?raw=true)
![payment activity diagram](/Picture/payment_activity_diagram.png?raw=true)
### 2.1.2 Mô tả
Printing 

Student đăng nhập và truy cập giao diện Upload file, màn hình hiện lên 2 lựa chọn để xác định tập tin cần in: 
- Nếu Student chọn Upload new file, hệ thống sẽ tiến hành kiểm tra loại tập tin được tải lên có phù hợp không, nếu không hệ thống sẽ báo lỗi và đưa Student về lại giao diện Upload file, còn trong trường hợp phù hợp hệ thống sẽ tải tập tin lên, sau đó đưa Student đến giao diện Choose selection to print. 
- Nếu Student chọn View printing history, hệ thống sẽ đưa Student đến giao diện History printing để Student chọn tập tin từ lịch sử các lần in trước và bản nháp của Student. Sau khi Student chọn tập tin muốn in hệ thống sẽ đưa Student đến giao diện Choose selection to print. 
Khi Student vào giao diện Choose selection to print, hệ thống sẽ hiện thị nội dung của tập tin lên màn hình. Student muốn chọn vị trí bắt đầu và kết thúc của tập tin để in có thể điền vị trí bắt đầu và kết thúc các trang in trong tập tin, nếu không hệ thống sẽ mặc định in toàn bộ trang trong tập tin. Sau khi xác nhận, hệ thống sẽ đưa Student đến giao diện Modified printing. 
Khi Student vào giao diện Modified printing, Student sẽ được hiệu chỉnh các thông số của các trang in trong tập tin đã tải lên. Ngoài ra Student có thể chọn số lượng copy của mỗi trang để in tại mục Choose number of copies, nếu không thay đổi hệ thống sẽ mặc định số lượng là 1. Sau khi xác nhận hoàn thành việc hiệu chỉnh trang in và chọn số lượng copy, hệ thống sẽ tính toán tổng số trang in và so sánh với số trang in hiện có của Student:  
- Nếu đủ trang in, hệ thống sẽ đưa Student đến giao diện Printing preview. 
- Nếu không đủ trang in, hệ thống sẽ thông báo cho Student và yêu cầu mua thêm trang (Buy pages) để thực hiện in. Sau khi hệ thống xác nhận Student mua thêm trang sẽ đưa Student đến giao diện mua trang tự động của hệ thống Sell pages systems. Hệ thống sẽ đề xuất số trang cần mua cho Student (Suggest number of page) sau đó thực hiện giao dịch mua trang của Student (Make payment). Sau khi giao dịch thành công hệ thống sẽ đưa Student về giao diện Choose number of copies. 
Khi Student được chuyển đến giao diện Printing preview, hệ thống sẽ hiển thị bản xem trước của tập tin với số lượng là 1 cho mỗi trang: 
- Nếu Student muốn chỉnh lại trang in sau khi xem bản xem trước có thể chọn quay lại, hệ thống sẽ đưa Student về giao diện Modified printing. 
- Nếu Student đã kiểm tra xong bản xem trước và muốn in, Student xác nhận . Hệ thống sau khi xác nhận sẽ lưu dữ liệu tập tin vào lịch sử in của Student, sau đó chuyển Student đến giao diện Search printer. 
Khi Student đến giao diện Search printer, hệ thống sẽ kiểm tra trạng thái của các máy in (Check printer status) để Student có thể tìm kiếm các máy in muốn in. Tại đây Student có thể yêu cầu đề xuất các máy in đang trống và gần vị trí Student nhất (Request available printer). Khi đó hệ thống đề xuất các máy in thỏa yêu cầu và hiển thị danh sách lên màn hình sau đó Student có thể chọn máy in muốn in (Choose printer). 
Sau khi đã chọn máy in, hệ thống sẽ gửi thông báo đến cho máy in đó và gửi dữ liệu tập tin Student để thực hiện việc in. 

Payment 

Student sau khi đến giao diện thanh toán của hệ thống Sell page system sẽ có hai lựa chọn: 
1.	Thanh toán sử dụng tài khoản BKPay (Use BKPay method): 
- Hệ thống sẽ liên kết với tài khoản BKPay của Student sau đó sẽ yêu cầu thanh toán và hiển thị giao diện để người dùng nhập liệu. 
2.	Thanh toán sử dụng tài khoản Momo (Pay with Momo): 
- Hệ thống sẽ liên kết với tài khoản ngân hàng của Student được Trường Đại học Bách Khoa cung cấp sau đó gửi yêu cầu thanh toán và hiển thị QR code. 

Student thực hiện nhập dữ liệu tại giao diện Input payment data để thanh toán số tiền được yêu cầu. Hệ thống sẽ kiểm tra sau khi thanh toán, nếu thanh toán thất bại hệ thống sẽ báo lỗi và đưa Student về giao diện Input payment data, nếu thành công, hệ thống sẽ thông báo thanh toán thành công sau đó gửi thông báo đến hệ thống SPSO để thêm số trang in cho Student đồng thời hệ thống thanh toán tự động Sell page system sẽ lưu giao dịch vào lịch sử giao dịch của hệ thống. 

## 2.2
### 2.2.1 Sequence diagrams for the important module  
![sequence diagram](/Picture/sequence_diagram.png?raw=true)
### 2.2.2 Mô tả  
1.	Student đang ở trang PrintingProcessView, tại đó muốn tải file lên để in: gọi hàm navigateToFileManagementView(): void để điều hướng đến trang quản lý file in. 
2.	Ở trang FileManagementView, Student ấn vào File mong muốn tải lên. Tại đây sẽ có 2 lựa chọn: Tải file mới lên hoặc chọn file từ History. Tại đây sẽ có 2 trường hợp xảy ra: 
- Nếu lựa chọn tải file mới lên: FileController sẽ thực hiện hàm uploadNewFile(file: 
File), trong đó truyền vào file là File vừa mới tải lên. Tại đây sẽ có 2 trường hợp xảy ra:
  + Nếu file có định dạng phù hợp, hệ thống sẽ hiển thị thông báo tải file lên thành công, và hệ thống sẽ thực hiện hàm updateHistory(file: File) để cập nhật file vừa mới tải lên vào danh sách các file đã được tải lên gần đây. o 	Nếu file không có định dạng phù hợp, hệ thống sẽ hiển thị thông báo tải file không thành công trên màn hình và kết thúc quá trình in do file đưa lên không phù hợp với định dạng yêu cầu. 
- Nếu lựa chọn chọn file từ History: FileController yêu cầu lấy danh sách các file đã tải lên gần đây từ database: thực hiện hàm getFileFromHistory(). Kết quả một danh sách file sẽ được trả về, FileManagementView thực hiện hàm displayFileList() để hiện thị danh sách các file đã được tải lên từ trước để Student có thể quan sát và chọn file cần in như mong muốn. 
3.	Ở trang FileManagementView, sau khi chọn được file cần in: gọi hàm navigateToPrintingProcessView(): void để trở về trang PrintingProcessView để chỉnh thông số của bản in. 
4.	Ở trang PrintingProcessView, Student chọn chỉnh thông số in: gọi hàm modifyParameterPrinting() để điều chỉnh các thông số in, sau đó cập nhật các thông số in lên database: gọi hàm updateParameterPrinting(). Tại đây sẽ có 2 trường hợp xảy ra: 
- Nếu tài khoản còn đủ số dư trang, hệ thống sẽ chuyển đến trang chọn máy in. 
- Nếu tài khoản không còn đủ số dư trang, PrintingProcessView sẽ hiển thị các phương thức thanh toán: gọi hàm displayPaymentMethod(): void. Sau đó sẽ thực hiện thanh toán. 
5.	Ở trang PrintingProcessView, Student chọn máy in: gọi hàm displayPrinterList(): 
void để hiển thị danh sách máy in. Nếu muốn tìm kiếm máy in cụ thể, Student sẽ có option tìm kiếm. PrintingProcessController sẽ thực hiện hàm searchPrinter(printer_id: integer), trong đó truyền vào printer_id là ID của máy in muốn tìm. Tại đây sẽ xảy ra 2 trường hợp: 
- Nếu tìm thấy máy in, hệ thống sẽ hiển thị thông báo tìm thấy máy in và trả về máy in đã tìm. 
- Nếu không tìm thấy máy in, hệ thống sẽ thông báo không tìm thấy máy in và yêu cầu tìm máy in khác. 
## 2.3
### 2.3.1 Class diagrams for the important module 
![class diagram](/Picture/class_diagram.png?raw=true)
### 2.3.2 Mô tả 
Class diagrams của module Printing Process được nhóm thiết kế theo mô hình kiến trúc MVC (Model-Controller-View). 
Mỗi tầng đảm nhiệm mỗi nhóm chức năng trong hệ thống: 
-	Tầng View: lắng nghe sự kiện, thu nhận dữ liệu và tương tác người dùng để chuyển đến Controller xử lý; hiển thị dữ liệu do Controller chuyển giao từ Model lên, hiển thị các giao diện, biểu mẫu xác nhận, thông báo, nhập liệu. 
-	Tầng Controller: xử lý sự kiện, điều kiện luồng dữ liệu, cập nhật giao diện. 
- Tầng Model: lưu trữ dữ liệu hệ thống và cung cấp phương thức cơ bản xử lý logic nghiệp vụ.  

Bảng mô tả các Class và quan hệ giữa chúng:  

| Class              | Mô tả                                                                                                 | Mối quan hệ                                                                                                                               |
|--------------------|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Bank               | Chức năng chính: cung cấp cách truy vấn tới dữ liệu Tài Khoản Ngân Hàng<br>Các thuộc tính:<br>- balance: bool<br>- username: string<br>- password: string | Với Student: (composition) một Student gồm một Bank, một Bank thuộc một Student                                                             |
| Student            | Chức năng chính: cung cấp cách truy vấn tới dữ liệu Sinh Viên<br>Các thuộc tính:<br>- studentID: int<br>- studentName: string<br>- faculty: Faculty<br>- bankAccount: Bank<br>- pageBalance: int<br>- fileHistoryList: list&lt;File&gt; | Với Bank: (composition) một Student gồm một Bank, một Bank thuộc một Student<br>Với Printing Process: (association) một student có thể thực hiện nhiều PrintingProcess. Một PrintingProcess được thực hiện bởi một Student<br>Với File: một student có thể có nhiều file, một file thuộc về một student  |
| Printer | Chức năng chính: cung cấp cách truy vấn tới dữ liệu Máy In <br>Các thuộc tính:  <br>printerID: int <br>brand/model: string <br>status: bool <br>location: string <br>description: string <br>printerList: List&lt;Printer&gt;| Với PrinterController: (association) cung cấp truy vấn lấy thêm sửa xoá dữ liệu máy in cho PrinterController  <br>Với PrintingProcess: (composition) một Printer có thể gồm nhiều PrintingProcess. Một PrintingProcess gồm một Printer <br>Với NearstPrinter (inheritance) là lớp cha |
| NearestPrinter   | Chức năng chính: cung cấp cách truy vấn tới dữ liệu vị trí gần nhất<br>Các thuộc tính:<br>- nearestPrinter: Map<integer, Printer> | Với Printer: (inheritance) là lớp con   |
| File                      | Chức năng chính: cung cấp cách truy vấn tới dữ liệu File<br>Các thuộc tính:<br>- name: string<br>- type: string<br>- size: double<br>- fileList: List&lt;File&gt; | Với FileController: (association) cung cấp truy vấn lấy thêm, xoá dữ liệu file cho FileController<br><br>Với PrintingProcessController: (association) cung cấp truy vấn dữ liệu file cho PrintingProcessController<br><br>Với Student: (association) một Student có thể chứa nhiều file, một file chỉ thuộc về một student |
| PrintingProcess     | Chức năng chính: cung cấp cách truy vấn tới dữ liệu Tiến Trình In<br>Các thuộc tính:<br>- processID: int<br>- printer: Printer<br>- student: Student<br>- file: File<br>- timeStart: string<br>- timeEnd: string<br>- status: string<br>- style: Style<br>- copiesNumber: int<br>- numPagePrinting: int | Với Printer: (association) một Printer có thể có nhiều PrintingProcess. Một PrintingProcess gồm một Printer<br><br>Với PrintingProcessController: (association) cung cấp truy vấn lấy thêm sửa xoá dữ liệu file cho PrintingProcessController<br><br>Với Student: (association) một student có thể thực hiện nhiều PrintingProcess. Một PrintingProcess được thực hiện bởi một Student |
| ProgressNoti        | Chức năng chính: cung cấp cách truy vấn tới dữ liệu Thông Báo Về Quá Trình In<br>Các thuộc tính:<br>- printingProcess: PrintingProcess<br>- updateStatus: string                                          | Với PrintingProcess<br><br>Với PrintingProcessController: (association) cung cấp truy vấn lấy thêm sửa xoá dữ liệu. Thông báo cập nhật tiến độ cho PrintingProcessController                                                |
| FileController | Chức năng chính: xử lý, điều khiển luồng dữ liệu File, cập nhật giao diện<br>Các thuộc tính:<br>- file: File<br>- fileManageView: FileManageView <br> Các phương thức:<br>- validateFile(file): bool (xác định tình trạng của File – hợp lệ/không hợp lệ)<br>- uploadNewFile(file): void (tải File mới lên)<br>- chooseFileFromHistory(): file (chọn file từ lịch sử)<br>- requestDeleteFile(): void (gọi truy vấn đến listFile để xóa 1 file)<br>- notiError(): void (hiển thị thông báo lỗi)<br><br>| Với FileView: (association) cung cấp chức năng điều khiển luồng dữ liệu và cập nhật giao diện hiển thị file<br><br>Với File: (association) gọi các truy vấn thao tác với dữ liệu file từ người dùng |

## 2.4
Nhóm sử dụng Figma làm framework để vẽ UI của nhóm. Workspace của nhóm: 
https://www.figma.com/file/2SqCIfZp8TO91uaeLFx2OE/SPSO-231?type=design&node-id=292%3A11640&mode=design&t=ggs727PVVBA2mjSd-1
![Home](/Picture/Home.png?raw=true)
