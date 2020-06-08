import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableModel, Table, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { CompensationDetailsDTO } from 'src/app/ts-classes/compensationDTOs/CompensationDetailsDTO';
import { HCAMDBUser } from 'src/app/ts-classes/HCAMDBUser';
import { Router } from '@angular/router';
import { CompensationService } from 'src/app/services/compensation.service';

@Component({
  selector: 'app-my-comp-requests',
  templateUrl: './my-comp-requests.component.html',
  styleUrls: ['./my-comp-requests.component.scss']
})
export class MyCompRequestsComponent implements OnInit {

  showLoader: boolean;
  isActive: boolean;
  overlay: boolean;
  data = [];
  model = new TableModel();
  modelDraft = new TableModel();
  modelInit = new TableModel();
  modelInitAddnInfoAdded = new TableModel();
  modelDiscuss = new TableModel();
  modelDiscussReqInfoAdded = new TableModel();
  modelMgrAccepted = new TableModel();
  modelMgrAcceptanceOverriden = new TableModel();
  modelAddnInfoReq = new TableModel();
  modelForReview = new TableModel();
  modelDiscussAddnInfoReq = new TableModel();
  modelReqProcessed = new TableModel();
  modelRejected = new TableModel();
  modelArchived = new TableModel();
  modelOtherRecords = new TableModel();
  skeletonModel = Table.skeletonModel(10, 5);
  skeleton = true;
  pemUser: HCAMDBUser;
  comprecords: CompensationDetailsDTO[] = [];
  compDraft: CompensationDetailsDTO[] = [];
  compInit: CompensationDetailsDTO[] = [];
  compInitAddnInfoAdded: CompensationDetailsDTO[] = [];
  compDiscuss: CompensationDetailsDTO[] = [];
  compDiscussReqInfoAdded: CompensationDetailsDTO[] = [];
  compMgrAccepted: CompensationDetailsDTO[] = [];
  compMgrAcceptanceOverriden: CompensationDetailsDTO[] = [];
  compAddnInfoReq: CompensationDetailsDTO[] = [];
  compForReview: CompensationDetailsDTO[] = [];
  compDiscussAddnInfoReq: CompensationDetailsDTO[] = [];
  compReqProcessed: CompensationDetailsDTO[] = [];
  compRejected: CompensationDetailsDTO[] = [];
  compArchived: CompensationDetailsDTO[] = [];
  otherCompRecords: CompensationDetailsDTO[] = [];
  @ViewChild('customTableItemTemplate')
  protected customTableItemTemplate: TemplateRef<any>;

  constructor(private router: Router, public compensationService: CompensationService) { }

  ngOnInit(): void {
    this.showLoader = true;
    this.isActive = true;
    this.overlay = true;
    // this.model.header = [
    //   new TableHeaderItem({data: 'Employee Serial'}),
    //   new TableHeaderItem({data: 'Host Serial'}),
    //   new TableHeaderItem({data: 'First Name'}),
    //   new TableHeaderItem({data: 'Last Name'}),
    //   new TableHeaderItem({data: 'Email ID'}),
    //   new TableHeaderItem({data: 'Current Work Location City'}),
    //   new TableHeaderItem({data: 'Current Zip Code'}),
    //   new TableHeaderItem({data: 'Compensation Type'}),
    //   new TableHeaderItem({data: 'Record Status'}),
    // ];
    this.setmodelParameters(this.model);
    this.setmodelParameters(this.modelDraft);
    this.setmodelParameters(this.modelInit);
    this.setmodelParameters(this.modelInitAddnInfoAdded);
    this.setmodelParameters(this.modelDiscuss);
    this.setmodelParameters(this.modelDiscussReqInfoAdded);
    this.setmodelParameters(this.modelMgrAccepted);
    this.setmodelParameters(this.modelMgrAcceptanceOverriden);
    this.setmodelParameters(this.modelAddnInfoReq);
    this.setmodelParameters(this.modelForReview);
    this.setmodelParameters(this.modelDiscussAddnInfoReq);
    this.setmodelParameters(this.modelReqProcessed);
    this.setmodelParameters(this.modelRejected);
    this.setmodelParameters(this.modelArchived);
    this.setmodelParameters(this.modelOtherRecords);
    this.pemUser = new HCAMDBUser();
    const listofRoles = sessionStorage.getItem('userdata');
    const json = JSON.parse(listofRoles);
    console.log('json:' , json);
    this.pemUser.blueGroupName = json.blueGroupName;
    this.pemUser.cnumID = json.hostEmpSerial;
    this.pemUser.notesId = json.notesId;
    this.pemUser.intranetID = sessionStorage.getItem('loggeduser');
    console.log(this.pemUser.intranetID , '        ' , this.pemUser.notesId, '         ', this.pemUser.cnumID);
    this.compensationService.getCompensationList(this.pemUser).subscribe( (resp: any) => {
      console.log('response:', resp);
      this.comprecords = resp.body;
      console.log('comprecords: ', this.comprecords);
      this.sortCompRecords();
    });
    this.showLoader = false;
    this.isActive = false;
    this.overlay = false;
  }

  setmodelParameters(model){
    model.header = [
        new TableHeaderItem({data: 'Employee Serial'}),
        new TableHeaderItem({data: 'Host Serial'}),
        new TableHeaderItem({data: 'First Name'}),
        new TableHeaderItem({data: 'Last Name'}),
        new TableHeaderItem({data: 'Email ID'}),
        new TableHeaderItem({data: 'Current Work Location City'}),
        new TableHeaderItem({data: 'Current Zip Code'}),
        new TableHeaderItem({data: 'Compensation Type'}),
        new TableHeaderItem({data: 'Record Status'}),
      ];
    // model.pageLength = 10;
  }

  prepareData(pagedata) {
    // console.log('inside prepare data: ', pagedata);
    this.skeleton = false;
    const newData = [];
    for (const datum of pagedata) {
    console.log('inside for loop: ', datum, 'datum vlaues: ', datum.resource);
    newData .push([new TableItem({ data:
      {empSerial: datum.empSerial , compId: datum.compId, link: 'comp/editCompRequest'},
      template: this.customTableItemTemplate}),
      // data: {name: datum.resource , resourceId: datum.resourceId, link: 'repos/editIBMI'}, template: this.customTableItemTemplate}),
      new TableItem({ data: datum.hostCountrySerial}),
      new TableItem({ data: datum.firstName }),
      new TableItem({ data: datum.lastName }),
      new TableItem({ data: datum.emailID}),
      new TableItem({ data: datum.currentWorkLocation}),
      new TableItem({ data: datum.zip}),
      new TableItem({ data: datum.compType}),
      new TableItem({ data: datum.compSt})]);
      // console.log('data.link: ', newData[0][0].data.name);
   }
    console.log('end of prepare data: ', newData);
    return newData;
  }

  sortCompRecords() {   // sorts the comp records obtained into differents list as per comp status.
    for (const comprecord of this.comprecords) {
      if (comprecord.compType === 'Other') { // Other
        if (comprecord.compSt === 'C') {
          comprecord.compSt = 'Current';
        } else if (comprecord.compSt === 'F') {
          comprecord.compSt = 'Future';
        }
        // this.modelOtherRecords.data.push(this.prepareData(comprecord));
        // this.modelOtherRecords.totalDataLength++;
        this.otherCompRecords.push(comprecord);
      } else {
          if (comprecord.compStatus === 'PARAM018') {  // Draft
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            // this.modelDraft.data.push(this.prepareData(comprecord));
            // this.modelDraft.totalDataLength++;
            this.compDraft.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM019') { // Initiated
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            // this.modelInit.data.push(this.prepareData(comprecord));
            // this.modelInit.totalDataLength++;
            this.compInit.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM020') { // Initiated - Required Information added
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            // this.modelInitAddnInfoAdded.data.push(this.prepareData(comprecord));
            // this.modelInitAddnInfoAdded.totalDataLength++;
            this.compInitAddnInfoAdded.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM023') { // Discuss
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            // this.modelDiscuss.data.push(this.prepareData(comprecord));
            // this.modelDiscuss.totalDataLength++;
            this.compDiscuss.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM191') { // Discuss-Required Info added
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            // this.modelDiscussReqInfoAdded.data.push(this.prepareData(comprecord));
            // this.modelDiscussReqInfoAdded.totalDataLength++;
            this.compDiscussReqInfoAdded.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM026') { // MGR Accepted
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            } else if (comprecord.compSt === 'H') {
              comprecord.compSt = 'History';
            }
            // this.modelMgrAccepted.data.push(this.prepareData(comprecord));
            // this.modelMgrAccepted.totalDataLength++;
            this.compMgrAccepted.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM300') { // Override Manager Acceptance
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            // this.modelMgrAcceptanceOverriden.data.push(this.prepareData(comprecord));
            // this.modelMgrAcceptanceOverriden.totalDataLength++;
            this.compMgrAcceptanceOverriden.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM021') { // Initiated - Additional information required
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            // this.modelAddnInfoReq.data.push(this.prepareData(comprecord));
            // this.modelAddnInfoReq.totalDataLength++;
            this.compAddnInfoReq.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM022') { // Offer for review
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            // this.modelForReview.data.push(this.prepareData(comprecord));
            // this.modelForReview.totalDataLength++;
            this.compForReview.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM190') {  // Discuss-Additional Info Reqrd
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            // this.modelDiscussAddnInfoReq.data.push(this.prepareData(comprecord));
            // this.modelDiscussAddnInfoReq.totalDataLength++;
            this.compDiscussAddnInfoReq.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM027') { // Request Processed
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            // this.modelReqProcessed.data.push(this.prepareData(comprecord));
            // this.modelReqProcessed.totalDataLength++;
            this.compReqProcessed.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM024') { // Rejected
            if (comprecord.compSt === 'H') {
              comprecord.compSt = 'History';
            }
            // this.modelRejected.data.push(this.prepareData(comprecord));
            // this.modelRejected.totalDataLength++;
            this.compRejected.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM025') { // Archive
            if (comprecord.compSt === 'H') {
              comprecord.compSt = 'History';
            }
            // this.modelArchived.data.push(this.prepareData(comprecord));
            // this.modelArchived.totalDataLength++;
            this.compArchived.push(comprecord);
          }
      }
    }
    this.modelDraft.data = this.prepareData(this.compDraft);
    this.modelInit.data = this.prepareData(this.compInit);
    this.modelInitAddnInfoAdded.data = this.prepareData(this.compInitAddnInfoAdded);
    this.modelDiscuss.data = this.prepareData(this.compDiscuss);
    this.modelDiscussReqInfoAdded.data = this.prepareData(this.compDiscussReqInfoAdded);
    this.modelMgrAccepted.data = this.prepareData(this.compMgrAccepted);
    this.modelMgrAcceptanceOverriden.data = this.prepareData(this.compMgrAcceptanceOverriden);
    this.modelAddnInfoReq.data = this.prepareData(this.compAddnInfoReq);
    this.modelForReview.data = this.prepareData(this.compForReview);
    this.modelDiscussAddnInfoReq.data = this.prepareData(this.compDiscussAddnInfoReq);
    this.modelReqProcessed.data = this.prepareData(this.compReqProcessed);
    this.modelRejected.data = this.prepareData(this.compRejected);
    this.modelArchived.data = this.prepareData(this.compArchived);
    this.modelOtherRecords.data = this.prepareData(this.otherCompRecords);
    this.modelInit.totalDataLength = this.compInit.length;
  }

  createCompReq() {
    this.router.navigate(['/comp/raiseCompRequest']);
  }

}
