# Task 3
## 3.1
### 3.1.1 Deployment Diagram
![deployment diagram](/Picture/deployment_diagram.png?raw=true)
- Hệ thống là một ứng dụng Web, được phát triển theo kiến trúc MVC, bao gồm 3 máy chủ chính: Client, Server và Database Server. 
- Máy chủ Client sẽ kết nối với Server thông qua giao thức TCP/IP, dữ liệu nhận được từ Server là các file hiện thực giao diện và sẽ được hiển thị trên browser website tại máy tính người dùng (Client) thông qua trình đọc HTML5 được nhúng trong trình duyệt. 
- Máy chủ Server bao gồm môi trường thực thi (execution environment) các module chức năng chính của hệ thống. Môi trường thực thi phía back-end là NodeJS, sử dụng Framework Express.js, bao gồm 2 component chính là PrinterManagementController và PrintingProcessController đảm nhận các tác vụ chính và điều khiển luồng dữ liệu liên quan đến quá trình in và quản lý các máy in. Môi trường thực thi phía front-end là ReactJS, sử dụng Framework là Material UI, bao gồm 2 component chính là PrintingProcessView và PrinterManagementView đảm nhận việc thực hiện các giao diện người dùng lên quan đến phân công công việc. Các component sẽ được thực hiện từ các file mã nguồn ngôn ngữ JavaScript tương ứng. Thông qua các REST API, front-end và back-end có thể giao tiếp được với nhau để cập nhật, hiển thị giao diện, nhận và phản hồi các tác vụ người dùng. 
- Máy chủ Server sẽ kết nối với Database Server thông qua giao thức TCP/IP, để truy xuất dữ liệu hiển thị lên giao diện hoặc cập nhật lại dữ liệu mỗi khi người dùng tương tác với ứng dụng, sau đó dữ liệu sau khi cập nhật sẽ được truyền qua giao thức TCP/IP sang Server và truyền sang máy Client để cập nhật lại giao diện. 
- Máy chủ Database bao gồm môi trường thực thi là DBMS MySQL. Trong phạm vi module Printing Process, máy chủ Database lưu trữ các thông tin bao gồm: Student, File, Bank, ProgressNoti, Printer ở dạng bảng có cấu trúc và các mối quan hệ với nhau. 
- Trong phạm vi module Printing Process, hệ thống cung cấp các chức năng chính sau:
  + Đối với Student: tải file lên hệ thống, xem lại file từ lịch sử in; xem thông tin, chọn, tìm kiếm máy in; xem, chỉnh sửa thông số in; xem trước bảng in. 
  + Hệ thống đảm bảo 1000 người sử dụng, 100-200 người truy xuất cùng lúc.
## 3.2
### 3.2.1 Component Diagram
![component diagram](/Picture/component_diagram.png?raw=true)
### 3.2.2 Mô tả Component diagram
Tầng View gồm 2 component chính: 
1. UploadFile 
- Chức năng chính: hiện thực các class cung cấp giao diện tải file in. 
- Gồm class: FileView cung cấp giao diện lựa chọn tải file cần in từ lịch sử in hoặc tải file mới, hiển thị danh sách file đã tải lên, thông báo kết quả tải file in. 
- Cả component yêu cầu interface FileUploadInfor, hiện thực interface IUploadFile 
2. PrintingProcess 
- Chức năng chính: hiện thực các class cung cấp giao diện chỉnh sửa file in, tìm kiếm và chọn máy in. 
- Gồm 2 component: DisplayFileOptions cung cấp giao diện chỉnh sửa thông số file in (mua thêm trang in nếu không đủ số dư) và bản xem trước file in sau khi chỉnh sửa, DisplayPrinterInfor cung cấp giao diện tìm kiếm và hiển thị danh sách máy in (bao gồm vị trí, tình trạng máy in). 
- DisplayFileOptions yêu cầu interface PrintingProcessInfor. 
- DisplayFileOptions hiện thực interface IPrintingProcess. 
- DisplayPrinterInfor yêu cầu interface PrinterInfor và GoogleMapAPI. 
- DisplayPrinterInfor hiện thực interface IPrinter. 

Tầng Controller gồm 2 component chính: 
1. PrintingController 
- Chức năng chính: hiện thực các class cung cấp phương thức xử lý yêu cầu và điều khiển dữ liệu liên quan đến file in được tải lên
- Gồm các class: FileController, PrintingProcessController. Class FileController cung cấp các phương thức điều khiển dữ liệu file tải lên và cập nhật tình trạng tải file. Class PrintingProcessController  cung cấp các phương thức điều khiển dữ liệu thông tin người dùng, thông tin file in và cập nhật thông số chỉnh sửa file in (cập nhật số dư trang in nếu thực hiện mua trang).
- Cả component yêu cầu interface FileUploadData. 
- PrintingProcessController yêu cầu interface PrintingModifedData. 
- FileController hiện thực interface FileUploadInfor. 
- PrintingProcessController hiện thực interface PrintingProcessInfor. 
2. PrinterController 
- Chức năng chính: hiện thực class cung cấp phương thức thức xử lý yêu cầu và điểu khiển dữ liệu liên quan đến máy in. 
- Có class PrinterController cung cấp các phương thức điều khiển dữ liệu thông tin máy in và cập nhật tình trạng máy in, tình trạng của yêu cầu gửi đến máy in. 
- Component yêu cầu interface PrinterData. 
- Component hiện thực interface PrinterInfor. 

Tầng Model gồm 2 component chính: 
1. File 
- Chức năng chính: lưu trữ và thực hiện truy vấn dữ liệu liên quan đến file in.
- Gồm các class: File (dữ liệu file), Student (thông tin người dùng), 
PrintingProcess (thông tin chỉnh sửa file in), ProgressNoti (thông báo tiến trình in). 
- File hiện thực interface FileUploadData. 
- ProgressNoti và PrintingProcess hiện thực interface PrintingModifiedData. 
2. FindPrinter 
- Chức năng chính: lưu trữ và thực hiện truy vấn dữ liệu liên quan đến máy in và bản đồ. 
- Gồm các class: Printer (Thông tin các máy in), NearstPrinter (Danh sách máy in gần nhất active). 
- Component hiện thực interface PrinterData.

Bảng mô tả interface:
| Interface | Chức năng | 
|-------|-------|
| IUploadFile  | Cung cấp giao diện giúp Student chọn phương thức tải file in: tải file muốn in lên nếu tải file in mới, tải file từ lịch sử in. | 
| IPrintingProcess | Cung cấp giao diện giúp Student chỉnh sửa các thông số cho file cần in, thực hiện mua trang in nếu không đủ số dư trang in.  | 
| IPrinter  | Cung cấp giao diện giúp Student tìm kiếm và chọn máy in muốn in, hiển thị danh sách các máy in hiện có và danh sách máy in đề xuất. .  | 
| GoogleMapAPI  | Cung cấp Google Map API giúp tích hợp bản đồ trực quan hiển thị vị trí các máy in. | 
| FileUploadInfor | Cung cấp các phương thức giúp điều khiển và kiểm tra dữ liệu file được tải lên của Student. | 
| PrintingProcessInfor | Cung cấp các phương thức cho yêu cầu chỉnh sửa thông số file in và mua trang in.  | 
| PrinterInfor  | Cung cấp các phương thức cho yêu cầu tìm kiếm và hiển thị danh sách máy in.  | 
| FileUploadData | Cung cấp API lấy dữ liệu Student và file in để xác thực và thêm dữ liệu file cho Student.  | 
| PrintingModifiedData  | Cung cấp API lấy dữ liệu liên quan đến điều chỉnh thông số in của file và mua trang in.  | 
| PrinterData  | Cung cấp API lấy dữ liệu về máy in và bản đồ vị trí của chúng.  | 



