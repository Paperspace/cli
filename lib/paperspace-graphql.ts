import { TypedDocumentNode as DocumentNode } from 'https://esm.sh/@graphql-typed-document-node/core@3.1.1';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: string;
  DateTime: Date;
  IPv4: string;
  JSON: unknown;
  UUID: string;
};

export type AwsConfig = {
  __typename?: 'AWSConfig';
  accessKeyId: Scalars['String'];
  logGroupName: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  secretAccessKey: Scalars['String'];
};

export type AccountCreditMutationInput = {
  amount?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  resetBalance?: InputMaybe<Scalars['Boolean']>;
  teamId: Scalars['Int'];
};

export type AccountLedger = {
  __typename?: 'AccountLedger';
  adRate?: Maybe<AddonRate>;
  amount?: Maybe<Scalars['Float']>;
  balance: Scalars['Float'];
  bucket?: Maybe<Bucket>;
  charge?: Maybe<StripeCharge>;
  description?: Maybe<Scalars['String']>;
  hourlyBalance?: Maybe<Scalars['Float']>;
  invoice?: Maybe<Invoice>;
  monthlyBalance?: Maybe<Scalars['Float']>;
  networkRate?: Maybe<AddonRate>;
  referralCode?: Maybe<ReferralCode>;
  storageRate?: Maybe<StorageRate>;
  stripe?: Maybe<Stripe>;
  timestamp: Scalars['DateTime'];
  vpnRate?: Maybe<AddonRate>;
};

export type AccountLedgerConnection = {
  __typename?: 'AccountLedgerConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<AccountLedgerEdge>;
  /** Flattened list of AccountLedger type */
  nodes: Array<AccountLedger>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type AccountLedgerEdge = {
  __typename?: 'AccountLedgerEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: AccountLedger;
};

export type AccountLedgerOrder = {
  direction?: OrderDirection;
  field?: AccountLedgerOrderField;
};

export enum AccountLedgerOrderField {
  Timestamp = 'timestamp'
}

export type Actor = {
  __typename?: 'Actor';
  avatarUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
};

export type AddonRate = {
  __typename?: 'AddonRate';
  label: Scalars['String'];
  rate: Scalars['String'];
};

export enum Agent {
  Enterprise = 'enterprise',
  Team = 'team',
  User = 'user'
}

export type AutoShutdownInput = {
  autoShutdown?: InputMaybe<Scalars['Boolean']>;
  autoShutdownTimeout?: InputMaybe<Scalars['Int']>;
};

export type AutoSnapshotInput = {
  autoSnapshot?: InputMaybe<Scalars['Boolean']>;
  autoSnapshotFrequency?: InputMaybe<Scalars['String']>;
  autoSnapshotSaveCount?: InputMaybe<Scalars['Int']>;
};

export type Billing = {
  __typename?: 'Billing';
  addCardDeclineCount: Scalars['Int'];
  billingAddress?: Maybe<BillingAddress>;
  cards?: Maybe<Array<StripePaymentCard>>;
  currentAndTargetGradientSubscription: CurrentTargetSubscriptions;
  hasCreditCard: Scalars['Boolean'];
  id: Scalars['String'];
  vatId?: Maybe<Scalars['String']>;
};


export type BillingCardsArgs = {
  handle?: InputMaybe<Scalars['String']>;
};


export type BillingVatIdArgs = {
  handle?: InputMaybe<Scalars['String']>;
};

export type BillingAddress = {
  __typename?: 'BillingAddress';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type Bucket = {
  __typename?: 'Bucket';
  dtCreated: Scalars['DateTime'];
  dtDeleted: Scalars['DateTime'];
  dtRemoved: Scalars['DateTime'];
  name: Scalars['String'];
  storageRateId: Scalars['Int'];
  teamId: Scalars['Int'];
};

export type BucketOrder = {
  direction?: OrderDirection;
  field?: BucketOrderField;
};

export enum BucketOrderField {
  DtCreated = 'dtCreated',
  DtDeleted = 'dtDeleted',
  DtRemoved = 'dtRemoved'
}

export type ChangeMachineOwnerAdminInput = {
  id: Scalars['String'];
  moveSnapshots?: InputMaybe<Scalars['Boolean']>;
  moveToSharedNetwork?: InputMaybe<Scalars['Boolean']>;
  removePublicIp?: InputMaybe<Scalars['Boolean']>;
  teamId: Scalars['String'];
};

export type ChangeMachineOwnerAdminPayload = {
  __typename?: 'ChangeMachineOwnerAdminPayload';
  machine?: Maybe<Machine>;
};

export type Cluster = {
  __typename?: 'Cluster';
  dtCreated: Scalars['DateTime'];
  dtModified: Scalars['DateTime'];
  fqdn: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ComputeLimit = {
  __typename?: 'ComputeLimit';
  alertAmount?: Maybe<Scalars['Float']>;
  dtModified?: Maybe<Scalars['DateTime']>;
  isOverAlertAmount?: Maybe<Scalars['Boolean']>;
  isOverMaxAmount?: Maybe<Scalars['Boolean']>;
  maxAmount?: Maybe<Scalars['Float']>;
  teamId: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type ComputeLimitAdminHistory = {
  __typename?: 'ComputeLimitAdminHistory';
  alertAmount?: Maybe<Scalars['Float']>;
  changedByUser: Actor;
  changedByUserId: Scalars['Int'];
  dtCreated: Scalars['DateTime'];
  maxAmount?: Maybe<Scalars['Float']>;
  teamId: Scalars['Int'];
  user?: Maybe<Actor>;
  userId?: Maybe<Scalars['Int']>;
};

export type ComputeLimitAdminHistoryConnection = {
  __typename?: 'ComputeLimitAdminHistoryConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<ComputeLimitAdminHistoryEdge>;
  /** Flattened list of ComputeLimitAdminHistory type */
  nodes: Array<ComputeLimitAdminHistory>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ComputeLimitAdminHistoryEdge = {
  __typename?: 'ComputeLimitAdminHistoryEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: ComputeLimitAdminHistory;
};

export type ComputeLimitHistoryOrder = {
  direction?: OrderDirection;
  field?: ComputeLimitHistoryOrderField;
};

export enum ComputeLimitHistoryOrderField {
  DtCreated = 'dtCreated'
}

export type ConfigInput = {
  accessKeyId?: InputMaybe<Scalars['String']>;
  apiKey?: InputMaybe<Scalars['String']>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logGroupName?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  secretAccessKey?: InputMaybe<Scalars['String']>;
};

export type ConfigStatus = {
  __typename?: 'ConfigStatus';
  errorMessage?: Maybe<Scalars['String']>;
};

export type ContainerRegistry = {
  __typename?: 'ContainerRegistry';
  dtCreated: Scalars['DateTime'];
  dtDeleted?: Maybe<Scalars['DateTime']>;
  dtModified: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  namespace: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  username: Scalars['String'];
};

export type ContainerRegistryConnection = {
  __typename?: 'ContainerRegistryConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<ContainerRegistryEdge>;
  /** Flattened list of ContainerRegistry type */
  nodes: Array<ContainerRegistry>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ContainerRegistryEdge = {
  __typename?: 'ContainerRegistryEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: ContainerRegistry;
};

export type ContainerRegistryOrder = {
  direction?: OrderDirection;
  field?: ContainerRegistryOrderField;
};

export enum ContainerRegistryOrderField {
  DtCreated = 'dtCreated',
  Name = 'name'
}

export type CreateContainerRegistryInput = {
  name: Scalars['String'];
  namespace: Scalars['String'];
  password: Scalars['String'];
  url: Scalars['String'];
  username: Scalars['String'];
};

export type CreateContainerRegistryPayload = {
  __typename?: 'CreateContainerRegistryPayload';
  containerRegistry: ContainerRegistry;
};

export type CreateDatasetInput = {
  description?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  storageProviderId: Scalars['String'];
};

export type CreateDatasetPayload = {
  __typename?: 'CreateDatasetPayload';
  dataset: GradientDataset;
};

export type CreateDatasetVersionInput = {
  datasetId: Scalars['String'];
  message?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
};

export type CreateDatasetVersionPayload = {
  __typename?: 'CreateDatasetVersionPayload';
  datasetVersion: GradientDatasetVersion;
};

export type CreateDeploymentInput = {
  clusterId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projectId: Scalars['String'];
  spec: DeploymentSpecDataInput;
};

export type CreateDeploymentPayload = {
  __typename?: 'CreateDeploymentPayload';
  deployment: Deployment;
};

export type CreateIntegrationConfigInput = {
  config: ConfigInput;
  gradientIntegrationId: Scalars['String'];
};

export type CreateIntegrationConfigPayload = {
  __typename?: 'CreateIntegrationConfigPayload';
  integrationConfig: GradientIntegrationConfig;
};

export type CreateMachineInput = {
  assignees?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  autoShutdown?: InputMaybe<AutoShutdownInput>;
  autoSnapshot?: InputMaybe<AutoSnapshotInput>;
  billingType: Scalars['String'];
  diskSizeGb: Scalars['Int'];
  emailPassword?: InputMaybe<Scalars['Boolean']>;
  enableNvlink?: InputMaybe<Scalars['Boolean']>;
  machineType: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  networkId?: InputMaybe<Scalars['String']>;
  publicIp?: InputMaybe<CreateMachinePublicIpValue>;
  region: Scalars['String'];
  startOnCreate?: InputMaybe<Scalars['Boolean']>;
  templateId: Scalars['String'];
};

export type CreateMachinePayload = {
  __typename?: 'CreateMachinePayload';
  machine: Machine;
};

/** Options for `publicIp` in `createMachine` mutation. */
export enum CreateMachinePublicIpValue {
  Dynamic = 'dynamic',
  Static = 'static'
}

export type CreateModelInput = {
  description?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  projectId?: InputMaybe<Scalars['String']>;
  storageProviderId: Scalars['String'];
};

export type CreateModelPayload = {
  __typename?: 'CreateModelPayload';
  model: GradientModel;
};

export type CreateModelVersionInput = {
  message?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  modelId: Scalars['String'];
  userId?: InputMaybe<Scalars['Int']>;
};

export type CreateModelVersionPayload = {
  __typename?: 'CreateModelVersionPayload';
  modelVersion: ModelVersion;
};

export type CreateProjectInput = {
  name: Scalars['String'];
};

export type CreateProjectIntegrationInput = {
  gradientIntegrationConfigId: Scalars['UUID'];
  projectId: Scalars['String'];
};

export type CreateProjectIntegrationPayload = {
  __typename?: 'CreateProjectIntegrationPayload';
  projectIntegration: GradientProjectIntegration;
};

export type CreateProjectPayload = {
  __typename?: 'CreateProjectPayload';
  project: Project;
};

export type CreateProjectSecretInput = {
  name: Scalars['String'];
  projectId: Scalars['String'];
  value: Scalars['String'];
};

export type CreateProjectSecretPayload = {
  __typename?: 'CreateProjectSecretPayload';
  projectSecret: ProjectSecret;
};

export type CreateSshKeyInput = {
  name: Scalars['String'];
  publicKey: Scalars['String'];
};

export type CreateSshKeyPayload = {
  __typename?: 'CreateSSHKeyPayload';
  sshKey: SshKey;
};

export type CreateSharedDriveInput = {
  name: Scalars['String'];
  networkId: Scalars['String'];
  regionId: Scalars['String'];
  size: Scalars['Int'];
};

export type CreateSharedDrivePayload = {
  __typename?: 'CreateSharedDrivePayload';
  sharedDrive: SharedDrive;
};

export type CreateStorageProviderInput = {
  isTeamDefault?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  s3Config: StorageProviderS3ConfigInput;
  storageProviderType: StorageProviderType;
};

export type CreateStorageProviderPayload = {
  __typename?: 'CreateStorageProviderPayload';
  storageProvider: StorageProvider;
};

export type CreateTeamSecretInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type CreateTeamSecretPayload = {
  __typename?: 'CreateTeamSecretPayload';
  teamSecret: TeamSecret;
};

export type CreateTemplateInput = {
  machineId: Scalars['String'];
  name: Scalars['String'];
};

export type CreateTemplatePayload = {
  __typename?: 'CreateTemplatePayload';
  template: CustomTemplate;
};

export type CreateVpnInput = {
  networkId: Scalars['String'];
  psk: Scalars['String'];
  remoteNetworks: Array<Scalars['String']>;
  remoteTunnelEndpoint: Scalars['String'];
};

export type CreateVpnPayload = {
  __typename?: 'CreateVPNPayload';
  vpn: Vpn;
};

export type CurrentTargetSubscriptions = {
  __typename?: 'CurrentTargetSubscriptions';
  current: GradientSubscription;
  target?: Maybe<GradientSubscription>;
};

export type CustomTemplate = Template & {
  __typename?: 'CustomTemplate';
  agentType: Scalars['String'];
  availableVmTypes: TemplateAvailableVmTypeConnection;
  defaultSizeGb?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  name: Scalars['String'];
  operatingSystem: OperatingSystem;
  region: Region;
};


export type CustomTemplateAvailableVmTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CustomTemplateConnection = {
  __typename?: 'CustomTemplateConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<CustomTemplateEdge>;
  /** Flattened list of CustomTemplate type */
  nodes: Array<CustomTemplate>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type CustomTemplateEdge = {
  __typename?: 'CustomTemplateEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: CustomTemplate;
};

export type Datacenter = {
  __typename?: 'Datacenter';
  location: Scalars['String'];
  name: Scalars['String'];
};

export type DatacenterConnection = {
  __typename?: 'DatacenterConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<DatacenterEdge>;
  /** Flattened list of Datacenter type */
  nodes: Array<Datacenter>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type DatacenterEdge = {
  __typename?: 'DatacenterEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Datacenter;
};

export type DatadogConfig = {
  __typename?: 'DatadogConfig';
  apiKey: Scalars['String'];
};

export type DatasetOrder = {
  direction?: OrderDirection;
  field?: DatasetOrderField;
};

export enum DatasetOrderField {
  DtCreated = 'dtCreated',
  Name = 'name'
}

export type DatasetVersionOrder = {
  direction?: OrderDirection;
  field?: DatasetVersionOrderField;
};

export enum DatasetVersionOrderField {
  DtCreated = 'dtCreated'
}

export type DeleteContainerRegistryInput = {
  id: Scalars['String'];
};

export type DeleteContainerRegistryPayload = {
  __typename?: 'DeleteContainerRegistryPayload';
  id: Scalars['String'];
};

export type DeleteDatasetInput = {
  id: Scalars['String'];
};

export type DeleteDatasetPayload = {
  __typename?: 'DeleteDatasetPayload';
  id: Scalars['String'];
};

export type DeleteDatasetVersionInput = {
  datasetId: Scalars['String'];
  version: Scalars['String'];
};

export type DeleteDatasetVersionPayload = {
  __typename?: 'DeleteDatasetVersionPayload';
  datasetId: Scalars['String'];
  version: Scalars['String'];
};

export type DeleteDeploymentInput = {
  id: Scalars['UUID'];
};

export type DeleteDeploymentPayload = {
  __typename?: 'DeleteDeploymentPayload';
  deployment: Deployment;
};

export type DeleteIntegrationConfigInput = {
  id: Scalars['UUID'];
};

export type DeleteIntegrationConfigPayload = {
  __typename?: 'DeleteIntegrationConfigPayload';
  id: Scalars['UUID'];
};

export type DeleteModelInput = {
  id: Scalars['String'];
};

export type DeleteModelPayload = {
  __typename?: 'DeleteModelPayload';
  id: Scalars['String'];
};

export type DeleteModelVersionInput = {
  modelId: Scalars['String'];
  version: Scalars['String'];
};

export type DeleteModelVersionPayload = {
  __typename?: 'DeleteModelVersionPayload';
  modelId: Scalars['String'];
  version: Scalars['String'];
};

export type DeleteProjectIntegrationInput = {
  gradientIntegrationConfigId: Scalars['UUID'];
  projectId: Scalars['String'];
};

export type DeleteProjectIntegrationPayload = {
  __typename?: 'DeleteProjectIntegrationPayload';
  id: Scalars['UUID'];
};

export type DeleteSshKeyInput = {
  id: Scalars['UUID'];
};

export type DeleteSshKeyPayload = {
  __typename?: 'DeleteSSHKeyPayload';
  sshKey: SshKey;
};

export type DeleteSharedDriveInput = {
  id: Scalars['String'];
};

export type DeleteSharedDrivePayload = {
  __typename?: 'DeleteSharedDrivePayload';
  sharedDrive: SharedDrive;
};

export type DeleteStorageProviderInput = {
  id: Scalars['String'];
};

export type DeleteStorageProviderPayload = {
  __typename?: 'DeleteStorageProviderPayload';
  id: Scalars['String'];
};

export type DeleteVpnInput = {
  id: Scalars['Int'];
};

export type DeleteVpnPayload = {
  __typename?: 'DeleteVPNPayload';
  vpn?: Maybe<Vpn>;
};

export type Deployment = {
  __typename?: 'Deployment';
  deploymentSpecs: DeploymentSpecConnection;
  dtCreated: Scalars['DateTime'];
  dtDeleted?: Maybe<Scalars['DateTime']>;
  dtModified?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  log?: Maybe<DeploymentLog>;
  logs: DeploymentLogConnection;
  name: Scalars['String'];
};


export type DeploymentDeploymentSpecsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  clusterId?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeploymentSpecOrder>;
};


export type DeploymentLogArgs = {
  instanceName: Scalars['String'];
};


export type DeploymentLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeploymentLogOrder>;
};

export type DeploymentConnection = {
  __typename?: 'DeploymentConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<DeploymentEdge>;
  /** Flattened list of Deployment type */
  nodes: Array<Deployment>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type DeploymentEdge = {
  __typename?: 'DeploymentEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Deployment;
};

export type DeploymentLog = {
  __typename?: 'DeploymentLog';
  dtCreated: Scalars['DateTime'];
  instanceName: Scalars['String'];
  instanceStarted?: Maybe<Scalars['DateTime']>;
  instanceStopped?: Maybe<Scalars['DateTime']>;
  lines: DeploymentLogLineConnection;
};


export type DeploymentLogLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeploymentLogLineOrder>;
};

export type DeploymentLogConnection = {
  __typename?: 'DeploymentLogConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<DeploymentLogEdge>;
  /** Flattened list of DeploymentLog type */
  nodes: Array<DeploymentLog>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type DeploymentLogEdge = {
  __typename?: 'DeploymentLogEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: DeploymentLog;
};

export type DeploymentLogLine = {
  __typename?: 'DeploymentLogLine';
  deploymentId: Scalars['UUID'];
  deploymentSpecId: Scalars['UUID'];
  dtCreated: Scalars['DateTime'];
  instanceName: Scalars['String'];
  line: Scalars['Int'];
  message: Scalars['String'];
};

export type DeploymentLogLineConnection = {
  __typename?: 'DeploymentLogLineConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<DeploymentLogLineEdge>;
  /** Flattened list of DeploymentLogLine type */
  nodes: Array<DeploymentLogLine>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type DeploymentLogLineEdge = {
  __typename?: 'DeploymentLogLineEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: DeploymentLogLine;
};

export type DeploymentLogLineOrder = {
  direction?: OrderDirection;
  field?: DeploymentLogLineOrderField;
};

export enum DeploymentLogLineOrderField {
  DtCreated = 'dtCreated'
}

export type DeploymentLogOrder = {
  direction?: OrderDirection;
  field?: DeploymentLogOrderField;
};

export enum DeploymentLogOrderField {
  DtCreated = 'dtCreated'
}

export type DeploymentOrder = {
  direction?: OrderDirection;
  field?: DeploymentOrderField;
};

export enum DeploymentOrderField {
  DtCreated = 'dtCreated'
}

export type DeploymentRun = {
  __typename?: 'DeploymentRun';
  availableReplicas?: Maybe<Scalars['Int']>;
  deploymentRunInstances?: Maybe<DeploymentRunInstanceConnection>;
  dtCreated: Scalars['DateTime'];
  dtDeleted?: Maybe<Scalars['DateTime']>;
  dtModified?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  readyReplicas?: Maybe<Scalars['Int']>;
  replicas?: Maybe<Scalars['Int']>;
};


export type DeploymentRunDeploymentRunInstancesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeploymentRunInstanceOrder>;
};

export type DeploymentRunConnection = {
  __typename?: 'DeploymentRunConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<DeploymentRunEdge>;
  /** Flattened list of DeploymentRun type */
  nodes: Array<DeploymentRun>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type DeploymentRunEdge = {
  __typename?: 'DeploymentRunEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: DeploymentRun;
};

export type DeploymentRunInstance = {
  __typename?: 'DeploymentRunInstance';
  dtDeleted?: Maybe<Scalars['DateTime']>;
  dtFinished?: Maybe<Scalars['DateTime']>;
  dtStarted?: Maybe<Scalars['DateTime']>;
  externalApplied?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  phase?: Maybe<InstancePhase>;
  state?: Maybe<DeploymentRunInstanceState>;
  stateMessage?: Maybe<Scalars['String']>;
};

export type DeploymentRunInstanceConnection = {
  __typename?: 'DeploymentRunInstanceConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<DeploymentRunInstanceEdge>;
  /** Flattened list of DeploymentRunInstance type */
  nodes: Array<DeploymentRunInstance>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type DeploymentRunInstanceEdge = {
  __typename?: 'DeploymentRunInstanceEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: DeploymentRunInstance;
};

export type DeploymentRunInstanceOrder = {
  direction?: OrderDirection;
  field?: DeploymentRunInstanceOrderField;
};

export enum DeploymentRunInstanceOrderField {
  DtCreated = 'dtCreated'
}

export enum DeploymentRunInstanceState {
  Errored = 'errored',
  Failed = 'failed',
  Healthy = 'healthy',
  Pending = 'pending',
  Retrying = 'retrying'
}

export type DeploymentRunOrder = {
  direction?: OrderDirection;
  field?: DeploymentRunOrderField;
};

export enum DeploymentRunOrderField {
  DtCreated = 'dtCreated'
}

export type DeploymentSpec = {
  __typename?: 'DeploymentSpec';
  actor: Actor;
  cluster?: Maybe<Cluster>;
  data: DeploymentSpecData;
  deployment?: Maybe<Deployment>;
  deploymentRuns?: Maybe<DeploymentRunConnection>;
  dtCreated: Scalars['DateTime'];
  dtInvalid?: Maybe<Scalars['DateTime']>;
  endpointUrl: Scalars['String'];
  error?: Maybe<Scalars['String']>;
  externalApplied?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
};


export type DeploymentSpecDeploymentRunsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeploymentRunOrder>;
};

export type DeploymentSpecAutoscaling = {
  __typename?: 'DeploymentSpecAutoscaling';
  enabled?: Maybe<Scalars['Boolean']>;
  maxReplicas: Scalars['Int'];
  metrics: Array<DeploymentSpecAutoscalingMetricObject>;
};

export type DeploymentSpecAutoscalingInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  maxReplicas?: InputMaybe<Scalars['Int']>;
  metrics?: InputMaybe<Array<InputMaybe<DeploymentSpecAutoscalingMetricInput>>>;
};

export type DeploymentSpecAutoscalingMetricInput = {
  metric?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type DeploymentSpecAutoscalingMetricObject = {
  __typename?: 'DeploymentSpecAutoscalingMetricObject';
  metric: Scalars['String'];
  summary: Scalars['String'];
  value: Scalars['Float'];
};

export type DeploymentSpecConnection = {
  __typename?: 'DeploymentSpecConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<DeploymentSpecEdge>;
  /** Flattened list of DeploymentSpec type */
  nodes: Array<DeploymentSpec>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type DeploymentSpecData = {
  __typename?: 'DeploymentSpecData';
  command?: Maybe<Array<Scalars['String']>>;
  containerRegistry?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  env?: Maybe<Array<DeploymentSpecEnvVariable>>;
  image: Scalars['String'];
  models?: Maybe<Array<DeploymentSpecModel>>;
  port?: Maybe<Scalars['Int']>;
  protocol?: Maybe<Protocol>;
  repositories?: Maybe<DeploymentSpecRepositories>;
  resources?: Maybe<DeploymentSpecResources>;
};

export type DeploymentSpecDataInput = {
  command?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  containerRegistry?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  env?: InputMaybe<Array<InputMaybe<DeploymentSpecEnvVariableInput>>>;
  image?: InputMaybe<Scalars['String']>;
  models?: InputMaybe<Array<InputMaybe<DeploymentSpecModelInput>>>;
  port?: InputMaybe<Scalars['Int']>;
  protocol?: InputMaybe<Protocol>;
  repositories?: InputMaybe<DeploymentSpecRepositoriesInput>;
  resources?: InputMaybe<DeploymentSpecResourcesInput>;
};

export type DeploymentSpecEdge = {
  __typename?: 'DeploymentSpecEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: DeploymentSpec;
};

export type DeploymentSpecEnvVariable = {
  __typename?: 'DeploymentSpecEnvVariable';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type DeploymentSpecEnvVariableInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type DeploymentSpecModel = {
  __typename?: 'DeploymentSpecModel';
  id: Scalars['String'];
  path?: Maybe<Scalars['String']>;
};

export type DeploymentSpecModelInput = {
  id?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};

export type DeploymentSpecOrder = {
  direction?: OrderDirection;
  field?: DeploymentSpecOrderField;
};

export enum DeploymentSpecOrderField {
  DtCreated = 'dtCreated'
}

export type DeploymentSpecRepositories = {
  __typename?: 'DeploymentSpecRepositories';
  dataset?: Maybe<Scalars['String']>;
  mountPath?: Maybe<Scalars['String']>;
  repositories?: Maybe<Array<DeploymentSpecRepository>>;
};

export type DeploymentSpecRepositoriesInput = {
  dataset?: InputMaybe<Scalars['String']>;
  mountPath?: InputMaybe<Scalars['String']>;
  repositories?: InputMaybe<Array<InputMaybe<DeploymentSpecRepositoryInput>>>;
};

export type DeploymentSpecRepository = {
  __typename?: 'DeploymentSpecRepository';
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type DeploymentSpecRepositoryInput = {
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  ref?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};

export type DeploymentSpecResources = {
  __typename?: 'DeploymentSpecResources';
  autoscaling?: Maybe<DeploymentSpecAutoscaling>;
  instanceType?: Maybe<Scalars['String']>;
  replicas: Scalars['Int'];
};

export type DeploymentSpecResourcesInput = {
  autoscaling?: InputMaybe<DeploymentSpecAutoscalingInput>;
  instanceType?: InputMaybe<Scalars['String']>;
  replicas?: InputMaybe<Scalars['Int']>;
};

export enum DirectionEnum {
  Downgraded = 'Downgraded',
  Upgraded = 'Upgraded'
}

export type GenericConfig = {
  __typename?: 'GenericConfig';
  emails: Array<Scalars['String']>;
};

export type GradientDataset = {
  __typename?: 'GradientDataset';
  description?: Maybe<Scalars['String']>;
  dtCreated: Scalars['DateTime'];
  dtModified: Scalars['DateTime'];
  handle?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isPublic: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  storageProvider?: Maybe<StorageProvider>;
  teamId?: Maybe<Scalars['String']>;
  usageBytes: Scalars['String'];
};

export type GradientDatasetConnection = {
  __typename?: 'GradientDatasetConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<GradientDatasetEdge>;
  /** Flattened list of GradientDataset type */
  nodes: Array<GradientDataset>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type GradientDatasetEdge = {
  __typename?: 'GradientDatasetEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: GradientDataset;
};

export type GradientDatasetVersion = {
  __typename?: 'GradientDatasetVersion';
  datasetId: Scalars['String'];
  dtCreated: Scalars['DateTime'];
  dtModified: Scalars['DateTime'];
  isCommitted: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
  usageBytes?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
  version: Scalars['String'];
};

export type GradientDatasetVersionConnection = {
  __typename?: 'GradientDatasetVersionConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<GradientDatasetVersionEdge>;
  /** Flattened list of GradientDatasetVersion type */
  nodes: Array<GradientDatasetVersion>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type GradientDatasetVersionEdge = {
  __typename?: 'GradientDatasetVersionEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: GradientDatasetVersion;
};

export type GradientIntegration = {
  __typename?: 'GradientIntegration';
  description?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  provider: Scalars['String'];
  type: Scalars['String'];
};

export type GradientIntegrationConfig = {
  __typename?: 'GradientIntegrationConfig';
  actor?: Maybe<Actor>;
  config: IntegrationConfig;
  enabled: Scalars['Boolean'];
  gradientIntegration: GradientIntegration;
  gradientIntegrationId: Scalars['UUID'];
  id: Scalars['UUID'];
  projectIntegrations?: Maybe<GradientProjectIntegrationConnection>;
  status?: Maybe<ConfigStatus>;
};


export type GradientIntegrationConfigProjectIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type GradientIntegrationConnection = {
  __typename?: 'GradientIntegrationConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<GradientIntegrationEdge>;
  /** Flattened list of GradientIntegration type */
  nodes: Array<GradientIntegration>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type GradientIntegrationEdge = {
  __typename?: 'GradientIntegrationEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: GradientIntegration;
};

export type GradientLedger = {
  __typename?: 'GradientLedger';
  amount?: Maybe<Scalars['Float']>;
  balance: Scalars['Float'];
  deploymentv3Spec?: Maybe<DeploymentSpec>;
  description?: Maybe<Scalars['String']>;
  gradientVolume?: Maybe<GradientVolume>;
  invoice?: Maybe<Invoice>;
  jobId?: Maybe<Scalars['Int']>;
  stripe?: Maybe<Stripe>;
  timestamp: Scalars['DateTime'];
  usageRate?: Maybe<UsageRate>;
  workflowRunJob?: Maybe<WorkflowRun>;
};

export type GradientLedgerConnection = {
  __typename?: 'GradientLedgerConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<GradientLedgerEdge>;
  /** Flattened list of GradientLedger type */
  nodes: Array<GradientLedger>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type GradientLedgerEdge = {
  __typename?: 'GradientLedgerEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: GradientLedger;
};

export type GradientLedgerOrder = {
  direction?: OrderDirection;
  field?: GradientLedgerOrderField;
};

export enum GradientLedgerOrderField {
  Timestamp = 'timestamp'
}

export type GradientModel = {
  __typename?: 'GradientModel';
  description?: Maybe<Scalars['String']>;
  dtCreated: Scalars['DateTime'];
  dtModified: Scalars['DateTime'];
  handle?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  projectId?: Maybe<Scalars['String']>;
  storageProviderId?: Maybe<Scalars['String']>;
  teamId: Scalars['Int'];
};

export type GradientModelConnection = {
  __typename?: 'GradientModelConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<GradientModelEdge>;
  /** Flattened list of GradientModel type */
  nodes: Array<GradientModel>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type GradientModelEdge = {
  __typename?: 'GradientModelEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: GradientModel;
};

export type GradientProjectIntegration = {
  __typename?: 'GradientProjectIntegration';
  dtCreated: Scalars['DateTime'];
  dtDeleted: Scalars['DateTime'];
  gradientIntegrationConfigurationId: Scalars['UUID'];
  id: Scalars['UUID'];
  project?: Maybe<Project>;
};

export type GradientProjectIntegrationConnection = {
  __typename?: 'GradientProjectIntegrationConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<GradientProjectIntegrationEdge>;
  /** Flattened list of GradientProjectIntegration type */
  nodes: Array<GradientProjectIntegration>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type GradientProjectIntegrationEdge = {
  __typename?: 'GradientProjectIntegrationEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: GradientProjectIntegration;
};

export type GradientSubscription = {
  __typename?: 'GradientSubscription';
  deploymentsQuota?: Maybe<Scalars['Int']>;
  displayOrder: Scalars['Int'];
  dtCreated: Scalars['DateTime'];
  dtModified: Scalars['DateTime'];
  enabledMachineTypes: Array<Scalars['String']>;
  enabledMachineTypesWithCreditCard: Array<Scalars['String']>;
  id: Scalars['Int'];
  isAvailable: Scalars['Boolean'];
  isDefault: Scalars['Boolean'];
  jobStorageQuotaBytes: Scalars['BigInt'];
  maxClusters: Scalars['Int'];
  maxPrivateNotebooks: Scalars['Int'];
  modelType: Scalars['String'];
  name: Scalars['String'];
  notebookExpiration?: Maybe<Scalars['Int']>;
  notebookExpirationSeconds?: Maybe<Scalars['Int']>;
  notebooksQuota: Scalars['Int'];
  rate?: Maybe<AddonRate>;
  runningJobsQuota: Scalars['Int'];
  runningNotebooksQuota: Scalars['Int'];
  storageRateId?: Maybe<Scalars['Int']>;
  workflowsQuota?: Maybe<Scalars['Int']>;
};

export type GradientSubscriptionChangeRequest = {
  __typename?: 'GradientSubscriptionChangeRequest';
  dtChanged: Scalars['DateTime'];
  fromSubscriptionId: Scalars['Int'];
  toSubscriptionId: Scalars['Int'];
};

export type GradientVolume = {
  __typename?: 'GradientVolume';
  displayName: Scalars['String'];
  dtCreated: Scalars['DateTime'];
  dtDeleted: Scalars['DateTime'];
  dtModified: Scalars['DateTime'];
  dtRemoved: Scalars['DateTime'];
  gradientStorageClassId: Scalars['UUID'];
  id: Scalars['String'];
  name: Scalars['String'];
  persistentVolume: Scalars['JSON'];
  quotaBytes: Scalars['BigInt'];
  usageBytes: Scalars['BigInt'];
  version: Scalars['Int'];
};

export type GradientVolumeOrder = {
  direction?: OrderDirection;
  field?: GradientVolumeOrderField;
};

export enum GradientVolumeOrderField {
  DtCreated = 'dtCreated',
  DtDeleted = 'dtDeleted',
  DtModified = 'dtModified',
  DtRemoved = 'dtRemoved'
}

export enum InstancePhase {
  Failed = 'Failed',
  Pending = 'Pending',
  Running = 'Running',
  Succeeded = 'Succeeded',
  Unknown = 'Unknown'
}

/** Union type for project integration configs */
export type IntegrationConfig = AwsConfig | DatadogConfig | GenericConfig;

export type Invoice = {
  __typename?: 'Invoice';
  amount: Scalars['Float'];
  amountCharged: Scalars['Float'];
  chargeId?: Maybe<Scalars['Int']>;
  dtCreated: Scalars['DateTime'];
  dtPaid?: Maybe<Scalars['DateTime']>;
  dtPeriodStart: Scalars['DateTime'];
  id: Scalars['Int'];
  invoiceResult?: Maybe<InvoiceResult>;
  paid: Scalars['Boolean'];
  stripeCharge?: Maybe<StripeCharge>;
  stripeId: Scalars['Int'];
};

export type InvoiceConnection = {
  __typename?: 'InvoiceConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<InvoiceEdge>;
  /** Flattened list of Invoice type */
  nodes: Array<Invoice>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type InvoiceEdge = {
  __typename?: 'InvoiceEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Invoice;
};

export type InvoiceOrder = {
  direction?: OrderDirection;
  field?: InvoiceOrderField;
};

export enum InvoiceOrderField {
  DtCreated = 'dtCreated',
  DtPaid = 'dtPaid',
  DtPeriodStart = 'dtPeriodStart'
}

export type InvoiceResult = {
  __typename?: 'InvoiceResult';
  dtAccountBalanceFinished?: Maybe<Scalars['DateTime']>;
  dtAccountBalanceStarted?: Maybe<Scalars['DateTime']>;
  dtAddonsFinished?: Maybe<Scalars['DateTime']>;
  dtAddonsStarted?: Maybe<Scalars['DateTime']>;
  dtGradientBalanceFinished?: Maybe<Scalars['DateTime']>;
  dtGradientBalanceStarted?: Maybe<Scalars['DateTime']>;
  dtInvoicesFinished?: Maybe<Scalars['DateTime']>;
  dtInvoicesStarted?: Maybe<Scalars['DateTime']>;
  dtMachineBalanceFinished?: Maybe<Scalars['DateTime']>;
  dtMachineBalanceStarted?: Maybe<Scalars['DateTime']>;
  dtMonthlyFinished?: Maybe<Scalars['DateTime']>;
  dtMonthlyStarted?: Maybe<Scalars['DateTime']>;
  dtPromoCodesFinished?: Maybe<Scalars['DateTime']>;
  dtPromoCodesStarted?: Maybe<Scalars['DateTime']>;
  invoiceMonth?: Maybe<Scalars['DateTime']>;
};

export enum MlObjectPrivacyType {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Machine = {
  __typename?: 'Machine';
  agentHeartbeat: Scalars['DateTime'];
  autoSnapshotFrequency: Scalars['String'];
  autoSnapshotSaveCount: Scalars['Int'];
  broken: Scalars['Boolean'];
  brokenError: Scalars['String'];
  capabilities: Scalars['JSON'];
  channel: Scalars['String'];
  cpus: Scalars['Int'];
  dtCreated: Scalars['DateTime'];
  dtDeleted: Scalars['DateTime'];
  dtModified: Scalars['DateTime'];
  dtRemoved: Scalars['DateTime'];
  dynamicPublicIp: Scalars['Boolean'];
  gpu: Scalars['Int'];
  gpuCount: Scalars['Int'];
  hostname: Scalars['String'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isAdAddComplete: Scalars['Boolean'];
  isAdJoined: Scalars['Boolean'];
  isDeleted: Scalars['Boolean'];
  isManaged: Scalars['Boolean'];
  isPreemptible: Scalars['Boolean'];
  isPrivate: Scalars['String'];
  isRemoved: Scalars['Boolean'];
  isSaltAgentInstalled: Scalars['Int'];
  linuxEmailPassword: Scalars['Boolean'];
  macAddress: Scalars['Int'];
  name: Scalars['String'];
  operatingSystemId: Scalars['Int'];
  os: Scalars['String'];
  peerId: Scalars['UUID'];
  performAutoSnapshot: Scalars['Boolean'];
  port: Scalars['Int'];
  portVnc: Scalars['Int'];
  protocol: Scalars['String'];
  psAgent: Scalars['String'];
  psService: Scalars['String'];
  psUpdateTarget: Scalars['String'];
  publicIp: Scalars['String'];
  ram: Scalars['BigInt'];
  removeFromBrokenAgents: Scalars['Boolean'];
  restorePointFrequency: Scalars['String'];
  serviceHeartbeat: Scalars['DateTime'];
  shutdownTimeoutForce: Scalars['Boolean'];
  shutdownTimeoutInHours: Scalars['Int'];
  state: Scalars['Int'];
  storageTotal: Scalars['BigInt'];
  storageUsed: Scalars['BigInt'];
  type: Scalars['Int'];
  vdiUuid: Scalars['String'];
  vmPassword: Scalars['String'];
  vmUuid: Scalars['String'];
  vncPassword: Scalars['Int'];
  xenName: Scalars['String'];
};

export type MachineLedger = {
  __typename?: 'MachineLedger';
  amount?: Maybe<Scalars['Float']>;
  balance: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  invoice?: Maybe<Invoice>;
  machine?: Maybe<Machine>;
  timestamp?: Maybe<Scalars['DateTime']>;
  usageRate?: Maybe<UsageRate>;
};

export type MachineLedgerOrder = {
  direction?: OrderDirection;
  field?: MachineLedgerOrderField;
};

export enum MachineLedgerOrderField {
  Timestamp = 'timestamp'
}

export type MarkInvoiceAsPaidInput = {
  invoiceId: Scalars['Int'];
  stripeChargeId?: InputMaybe<Scalars['String']>;
};

export type MarkInvoiceAsPaidPayload = {
  __typename?: 'MarkInvoiceAsPaidPayload';
  invoice: Invoice;
};

export type MlModel = {
  __typename?: 'MlModel';
  deploymentSpecs: DeploymentSpecConnection;
  dtCreated: Scalars['DateTime'];
  dtModified: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type MlModelDeploymentSpecsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  clusterId?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeploymentSpecOrder>;
};

export type MlModelConnection = {
  __typename?: 'MlModelConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<MlModelEdge>;
  /** Flattened list of MlModel type */
  nodes: Array<MlModel>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type MlModelEdge = {
  __typename?: 'MlModelEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: MlModel;
};

export type ModelOrder = {
  direction?: OrderDirection;
  field?: ModelOrderField;
};

export enum ModelOrderField {
  DtCreated = 'dtCreated',
  Name = 'name'
}

export type ModelVersion = {
  __typename?: 'ModelVersion';
  dtCreated: Scalars['DateTime'];
  dtModified: Scalars['DateTime'];
  isCommitted: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  metadata: Scalars['JSON'];
  modelId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
  version: Scalars['String'];
};

export type ModelVersionConnection = {
  __typename?: 'ModelVersionConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<ModelVersionEdge>;
  /** Flattened list of ModelVersion type */
  nodes: Array<ModelVersion>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ModelVersionEdge = {
  __typename?: 'ModelVersionEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: ModelVersion;
};

export type ModelVersionOrder = {
  direction?: OrderDirection;
  field?: ModelVersionOrderField;
};

export enum ModelVersionOrderField {
  DtCreated = 'dtCreated'
}

export type Mutation = {
  __typename?: 'Mutation';
  accountCreditMutation: AccountLedger;
  changeMachineOwnerAdmin: ChangeMachineOwnerAdminPayload;
  createContainerRegistry: CreateContainerRegistryPayload;
  createDataset: CreateDatasetPayload;
  createDatasetVersion: CreateDatasetVersionPayload;
  createDeployment: CreateDeploymentPayload;
  createIntegrationConfiguration: CreateIntegrationConfigPayload;
  createMachine: CreateMachinePayload;
  createModel: CreateModelPayload;
  createModelVersion: CreateModelVersionPayload;
  createProject: CreateProjectPayload;
  createProjectIntegration: CreateProjectIntegrationPayload;
  createProjectSecret: CreateProjectSecretPayload;
  createSSHKey: CreateSshKeyPayload;
  createSharedDrive: CreateSharedDrivePayload;
  createStorageProvider: CreateStorageProviderPayload;
  createTeamSecret: CreateTeamSecretPayload;
  createTemplate: CreateTemplatePayload;
  createVPN: CreateVpnPayload;
  deleteContainerRegistry: DeleteContainerRegistryPayload;
  deleteDataset: DeleteDatasetPayload;
  deleteDatasetVersion: DeleteDatasetVersionPayload;
  deleteDeployment: DeleteDeploymentPayload;
  deleteIntegrationConfig: DeleteIntegrationConfigPayload;
  deleteModel: DeleteModelPayload;
  deleteModelVersion: DeleteModelVersionPayload;
  deleteProjectIntegration: DeleteProjectIntegrationPayload;
  deleteSSHKey: DeleteSshKeyPayload;
  deleteSharedDrive: DeleteSharedDrivePayload;
  deleteStorageProvider: DeleteStorageProviderPayload;
  deleteVPN: DeleteVpnPayload;
  markInvoiceAsPaid: MarkInvoiceAsPaidPayload;
  registerOperatingSystemFromBase: RegisterOperatingSystemFromBasePayload;
  registerTemplateFromBase: RegisterTemplateFromBasePayload;
  retryInvoicePayment: RetryInvoicePaymentPayload;
  setComputeLimit: SetComputeLimitPayload;
  updateContainerRegistry: UpdateContainerRegistryPayload;
  updateDataset: UpdateDatasetPayload;
  updateDatasetVersion: UpdateDatasetVersionPayload;
  updateDeployment: UpdateDeploymentPayload;
  updateGradientSubscription: UpdateSubscriptionPayload;
  updateGradientSubscriptionAdmin: UpdateSubscriptionPayload;
  updateIntegrationConfig: UpdateIntegrationConfigPayload;
  updateMachine: UpdateMachinePayload;
  updateModel: UpdateModelPayload;
  updateModelVersion: UpdateModelVersionPayload;
  updateStorageProvider: UpdateStorageProviderPayload;
  updateStripeAdmin: UpdateStripeAdminPayload;
  updateTeamAdmin: UpdateTeamAdminPayload;
  updateTeamProfile: UpdateTeamProfilePayload;
  updateUser: UpdateUserPayload;
  updateUserAdmin: UpdateUserAdminPayload;
  updateUserInfo: UpdateUserInfoPayload;
  updateVPN: UpdateVpnPayload;
};


export type MutationAccountCreditMutationArgs = {
  input: AccountCreditMutationInput;
};


export type MutationChangeMachineOwnerAdminArgs = {
  input: ChangeMachineOwnerAdminInput;
};


export type MutationCreateContainerRegistryArgs = {
  input: CreateContainerRegistryInput;
};


export type MutationCreateDatasetArgs = {
  input: CreateDatasetInput;
};


export type MutationCreateDatasetVersionArgs = {
  input: CreateDatasetVersionInput;
};


export type MutationCreateDeploymentArgs = {
  input: CreateDeploymentInput;
};


export type MutationCreateIntegrationConfigurationArgs = {
  input: CreateIntegrationConfigInput;
};


export type MutationCreateMachineArgs = {
  input: CreateMachineInput;
};


export type MutationCreateModelArgs = {
  input: CreateModelInput;
};


export type MutationCreateModelVersionArgs = {
  input: CreateModelVersionInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateProjectIntegrationArgs = {
  input: CreateProjectIntegrationInput;
};


export type MutationCreateProjectSecretArgs = {
  input: CreateProjectSecretInput;
};


export type MutationCreateSshKeyArgs = {
  input: CreateSshKeyInput;
};


export type MutationCreateSharedDriveArgs = {
  input: CreateSharedDriveInput;
};


export type MutationCreateStorageProviderArgs = {
  input: CreateStorageProviderInput;
};


export type MutationCreateTeamSecretArgs = {
  input: CreateTeamSecretInput;
};


export type MutationCreateTemplateArgs = {
  input: CreateTemplateInput;
};


export type MutationCreateVpnArgs = {
  input: CreateVpnInput;
};


export type MutationDeleteContainerRegistryArgs = {
  input: DeleteContainerRegistryInput;
};


export type MutationDeleteDatasetArgs = {
  input: DeleteDatasetInput;
};


export type MutationDeleteDatasetVersionArgs = {
  input: DeleteDatasetVersionInput;
};


export type MutationDeleteDeploymentArgs = {
  input: DeleteDeploymentInput;
};


export type MutationDeleteIntegrationConfigArgs = {
  input: DeleteIntegrationConfigInput;
};


export type MutationDeleteModelArgs = {
  input: DeleteModelInput;
};


export type MutationDeleteModelVersionArgs = {
  input: DeleteModelVersionInput;
};


export type MutationDeleteProjectIntegrationArgs = {
  input: DeleteProjectIntegrationInput;
};


export type MutationDeleteSshKeyArgs = {
  input: DeleteSshKeyInput;
};


export type MutationDeleteSharedDriveArgs = {
  input: DeleteSharedDriveInput;
};


export type MutationDeleteStorageProviderArgs = {
  input: DeleteStorageProviderInput;
};


export type MutationDeleteVpnArgs = {
  input: DeleteVpnInput;
};


export type MutationMarkInvoiceAsPaidArgs = {
  input: MarkInvoiceAsPaidInput;
};


export type MutationRegisterOperatingSystemFromBaseArgs = {
  input: RegisterOperatingSystemFromBaseInput;
};


export type MutationRegisterTemplateFromBaseArgs = {
  input: RegisterTemplateFromBaseInput;
};


export type MutationRetryInvoicePaymentArgs = {
  input: RetryInvoicePaymentInput;
};


export type MutationSetComputeLimitArgs = {
  input: SetComputeLimitInput;
};


export type MutationUpdateContainerRegistryArgs = {
  input: UpdateContainerRegistryInput;
};


export type MutationUpdateDatasetArgs = {
  input: UpdateDatasetInput;
};


export type MutationUpdateDatasetVersionArgs = {
  input: UpdateDatasetVersionInput;
};


export type MutationUpdateDeploymentArgs = {
  input: UpdateDeploymentInput;
};


export type MutationUpdateGradientSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};


export type MutationUpdateGradientSubscriptionAdminArgs = {
  input: UpdateSubscriptionAdminInput;
};


export type MutationUpdateIntegrationConfigArgs = {
  input: UpdateIntegrationConfigInput;
};


export type MutationUpdateMachineArgs = {
  input: UpdateMachineInput;
};


export type MutationUpdateModelArgs = {
  input: UpdateModelInput;
};


export type MutationUpdateModelVersionArgs = {
  input: UpdateModelVersionInput;
};


export type MutationUpdateStorageProviderArgs = {
  input: UpdateStorageProviderInput;
};


export type MutationUpdateStripeAdminArgs = {
  input: UpdateStripeAdminInput;
};


export type MutationUpdateTeamAdminArgs = {
  input: UpdateTeamAdminInput;
};


export type MutationUpdateTeamProfileArgs = {
  input: UpdateTeamProfileInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserAdminArgs = {
  input: UpdateUserAdminInput;
};


export type MutationUpdateUserInfoArgs = {
  input: UpdateUserInfoInput;
};


export type MutationUpdateVpnArgs = {
  input: UpdateVpnInput;
};

export type OperatingSystem = {
  __typename?: 'OperatingSystem';
  description?: Maybe<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
  isBase: Scalars['Boolean'];
  isLicensed?: Maybe<Scalars['Boolean']>;
  isRecommended: Scalars['Boolean'];
  label: Scalars['String'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  operatingSystemGroup: Scalars['String'];
  vmTypes: VmTypeConnection;
};


export type OperatingSystemVmTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type OperatingSystemConnection = {
  __typename?: 'OperatingSystemConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<OperatingSystemEdge>;
  /** Flattened list of OperatingSystem type */
  nodes: Array<OperatingSystem>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type OperatingSystemEdge = {
  __typename?: 'OperatingSystemEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: OperatingSystem;
};

export type OperatingSystemGroup = {
  __typename?: 'OperatingSystemGroup';
  name: Scalars['String'];
  operatingSystems: OperatingSystemConnection;
};


export type OperatingSystemGroupOperatingSystemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type OperatingSystemGroupConnection = {
  __typename?: 'OperatingSystemGroupConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<OperatingSystemGroupEdge>;
  /** Flattened list of OperatingSystemGroup type */
  nodes: Array<OperatingSystemGroup>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type OperatingSystemGroupEdge = {
  __typename?: 'OperatingSystemGroupEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: OperatingSystemGroup;
};

export type OperatingSystemOrder = {
  direction?: OrderDirection;
  field?: OperatingSystemOrderField;
};

export enum OperatingSystemOrderField {
  DisplayOrder = 'displayOrder'
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars['String']>;
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  dtCreated: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  repoName?: Maybe<Scalars['String']>;
  repoNodeId?: Maybe<Scalars['String']>;
  repoUrl?: Maybe<Scalars['String']>;
};

export type ProjectActivities = ProjectDeploymentAutoscalingDisabledActivity | ProjectDeploymentAutoscalingEnabledActivity | ProjectDeploymentCreatedActivity | ProjectDeploymentDeletedActivity | ProjectDeploymentDisabledActivity | ProjectDeploymentEnabledActivity | ProjectDeploymentScaledActivity | ProjectDeploymentUpdatedActivity;

export type ProjectActivitiesConnection = {
  __typename?: 'ProjectActivitiesConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<ProjectActivitiesEdge>;
  /** Flattened list of ProjectActivities type */
  nodes: Array<ProjectActivities>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ProjectActivitiesEdge = {
  __typename?: 'ProjectActivitiesEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: ProjectActivities;
};

export type ProjectActivityAutoscalingData = {
  __typename?: 'ProjectActivityAutoscalingData';
  from: Scalars['Int'];
  to: Scalars['Int'];
};

/** Union type for project activity data */
export type ProjectActivityData = ProjectActivityAutoscalingData;

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<ProjectEdge>;
  /** Flattened list of Project type */
  nodes: Array<Project>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ProjectDeploymentActivity = {
  action: Scalars['String'];
  actor?: Maybe<Actor>;
  data?: Maybe<ProjectActivityData>;
  deployment: Deployment;
  deploymentId: Scalars['String'];
  dtCreated: Scalars['DateTime'];
  id: Scalars['UUID'];
  project: Project;
  projectId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectDeploymentAutoscalingDisabledActivity = ProjectDeploymentActivity & {
  __typename?: 'ProjectDeploymentAutoscalingDisabledActivity';
  action: Scalars['String'];
  actor?: Maybe<Actor>;
  data?: Maybe<ProjectActivityData>;
  deployment: Deployment;
  deploymentId: Scalars['String'];
  dtCreated: Scalars['DateTime'];
  id: Scalars['UUID'];
  project: Project;
  projectId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectDeploymentAutoscalingEnabledActivity = ProjectDeploymentActivity & {
  __typename?: 'ProjectDeploymentAutoscalingEnabledActivity';
  action: Scalars['String'];
  actor?: Maybe<Actor>;
  data?: Maybe<ProjectActivityData>;
  deployment: Deployment;
  deploymentId: Scalars['String'];
  dtCreated: Scalars['DateTime'];
  id: Scalars['UUID'];
  project: Project;
  projectId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectDeploymentCreatedActivity = ProjectDeploymentActivity & {
  __typename?: 'ProjectDeploymentCreatedActivity';
  action: Scalars['String'];
  actor?: Maybe<Actor>;
  data?: Maybe<ProjectActivityData>;
  deployment: Deployment;
  deploymentId: Scalars['String'];
  dtCreated: Scalars['DateTime'];
  id: Scalars['UUID'];
  project: Project;
  projectId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectDeploymentDeletedActivity = ProjectDeploymentActivity & {
  __typename?: 'ProjectDeploymentDeletedActivity';
  action: Scalars['String'];
  actor?: Maybe<Actor>;
  data?: Maybe<ProjectActivityData>;
  deployment: Deployment;
  deploymentId: Scalars['String'];
  dtCreated: Scalars['DateTime'];
  id: Scalars['UUID'];
  project: Project;
  projectId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectDeploymentDisabledActivity = ProjectDeploymentActivity & {
  __typename?: 'ProjectDeploymentDisabledActivity';
  action: Scalars['String'];
  actor?: Maybe<Actor>;
  data?: Maybe<ProjectActivityData>;
  deployment: Deployment;
  deploymentId: Scalars['String'];
  dtCreated: Scalars['DateTime'];
  id: Scalars['UUID'];
  project: Project;
  projectId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectDeploymentEnabledActivity = ProjectDeploymentActivity & {
  __typename?: 'ProjectDeploymentEnabledActivity';
  action: Scalars['String'];
  actor?: Maybe<Actor>;
  data?: Maybe<ProjectActivityData>;
  deployment: Deployment;
  deploymentId: Scalars['String'];
  dtCreated: Scalars['DateTime'];
  id: Scalars['UUID'];
  project: Project;
  projectId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectDeploymentScaledActivity = ProjectDeploymentActivity & {
  __typename?: 'ProjectDeploymentScaledActivity';
  action: Scalars['String'];
  actor?: Maybe<Actor>;
  data: ProjectActivityAutoscalingData;
  deployment: Deployment;
  deploymentId: Scalars['String'];
  dtCreated: Scalars['DateTime'];
  id: Scalars['UUID'];
  project: Project;
  projectId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectDeploymentUpdatedActivity = ProjectDeploymentActivity & {
  __typename?: 'ProjectDeploymentUpdatedActivity';
  action: Scalars['String'];
  actor?: Maybe<Actor>;
  data?: Maybe<ProjectActivityData>;
  deployment: Deployment;
  deploymentId: Scalars['String'];
  dtCreated: Scalars['DateTime'];
  id: Scalars['UUID'];
  project: Project;
  projectId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Project;
};

export type ProjectOrder = {
  direction?: OrderDirection;
  field?: ProjectOrderField;
};

export enum ProjectOrderField {
  DtCreated = 'dtCreated'
}

export type ProjectSecret = {
  __typename?: 'ProjectSecret';
  dtCreated: Scalars['DateTime'];
  dtModified: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  projectId?: Maybe<Scalars['String']>;
};

export type ProjectSecretConnection = {
  __typename?: 'ProjectSecretConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<ProjectSecretEdge>;
  /** Flattened list of ProjectSecret type */
  nodes: Array<ProjectSecret>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ProjectSecretEdge = {
  __typename?: 'ProjectSecretEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: ProjectSecret;
};

export type ProjectSecretOrder = {
  direction?: OrderDirection;
  field?: ProjectSecretOrderField;
};

export enum ProjectSecretOrderField {
  DtCreated = 'dtCreated'
}

export enum Protocol {
  Http = 'http',
  Http2 = 'http2'
}

export type PublicTemplate = Template & {
  __typename?: 'PublicTemplate';
  agentType: Scalars['String'];
  availableVmTypes: TemplateAvailableVmTypeConnection;
  defaultSizeGb?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  name: Scalars['String'];
  operatingSystem: OperatingSystem;
};


export type PublicTemplateAvailableVmTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  accountLedgerAdmin: AccountLedgerConnection;
  billing?: Maybe<Billing>;
  computeLimit?: Maybe<ComputeLimit>;
  computeLimitAdminHistory: ComputeLimitAdminHistoryConnection;
  containerRegistries: ContainerRegistryConnection;
  containerRegistry?: Maybe<ContainerRegistry>;
  datacenter?: Maybe<Datacenter>;
  datacenters: DatacenterConnection;
  dataset?: Maybe<GradientDataset>;
  datasetVersion?: Maybe<GradientDatasetVersion>;
  datasetVersions: GradientDatasetVersionConnection;
  datasets: GradientDatasetConnection;
  deployment?: Maybe<Deployment>;
  deployments: DeploymentConnection;
  freeStorageLimit: StorageLimit;
  gradientIntegration: GradientIntegration;
  gradientIntegrationConfiguration?: Maybe<GradientIntegrationConfig>;
  gradientIntegrations: GradientIntegrationConnection;
  gradientLedgerAdmin: GradientLedgerConnection;
  gradientSubscription: CurrentTargetSubscriptions;
  gradientVolume: GradientVolume;
  invoices: InvoiceConnection;
  machineMinimumSubscription?: Maybe<GradientSubscription>;
  model?: Maybe<GradientModel>;
  modelDeployments: MlModelConnection;
  modelVersion?: Maybe<ModelVersion>;
  modelVersions: ModelVersionConnection;
  models: GradientModelConnection;
  operatingSystem?: Maybe<OperatingSystem>;
  operatingSystemGroup?: Maybe<OperatingSystemGroup>;
  operatingSystemGroups: OperatingSystemGroupConnection;
  operatingSystems: OperatingSystemConnection;
  pendingTeamMembership?: Maybe<TeamMembership>;
  pendingTeamMemberships: TeamMembershipConnection;
  project?: Maybe<Project>;
  projectActivities: ProjectActivitiesConnection;
  projectSecrets: ProjectSecretConnection;
  projects: ProjectConnection;
  region?: Maybe<Region>;
  regions: RegionConnection;
  secretSubstitution: SecretSubsitution;
  sharedDrives: SharedDriveConnection;
  sshKey: SshKey;
  sshKeys: SshKeyConnection;
  storageProvider: StorageProvider;
  storageProviders: StorageProviderConnection;
  storageRates: StorageRateConnection;
  storageUtilization: StorageUtilization;
  stripe?: Maybe<Stripe>;
  teamAdmin?: Maybe<Team>;
  teamComputeLimits: Array<ComputeLimit>;
  teamSecrets: TeamSecretConnection;
  templates: CustomTemplateConnection;
  userAdmin?: Maybe<User>;
  viewer?: Maybe<Viewer>;
  vmType?: Maybe<VmType>;
  vmTypes: VmTypeConnection;
  vpn?: Maybe<Vpn>;
  vpns: VpnConnection;
};


export type QueryAccountLedgerAdminArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  handle: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountLedgerOrder>;
};


export type QueryBillingArgs = {
  handle: Scalars['String'];
};


export type QueryComputeLimitArgs = {
  teamId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryComputeLimitAdminHistoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  handle: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ComputeLimitHistoryOrder>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type QueryContainerRegistriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContainerRegistryOrder>;
};


export type QueryContainerRegistryArgs = {
  id: Scalars['String'];
};


export type QueryDatacenterArgs = {
  name: Scalars['String'];
};


export type QueryDatacentersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  regionId: Scalars['Int'];
};


export type QueryDatasetArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDatasetVersionArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  version: Scalars['String'];
};


export type QueryDatasetVersionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  datasetId: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DatasetVersionOrderField>;
};


export type QueryDatasetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DatasetOrder>;
  privacy?: InputMaybe<MlObjectPrivacyType>;
  teamId?: InputMaybe<Scalars['String']>;
};


export type QueryDeploymentArgs = {
  id: Scalars['UUID'];
};


export type QueryDeploymentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<DeploymentOrder>;
  projectId?: InputMaybe<Scalars['String']>;
};


export type QueryGradientIntegrationArgs = {
  id: Scalars['String'];
};


export type QueryGradientIntegrationConfigurationArgs = {
  gradientIntegrationId: Scalars['String'];
};


export type QueryGradientIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGradientLedgerAdminArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  handle: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GradientLedgerOrder>;
};


export type QueryGradientSubscriptionArgs = {
  handle: Scalars['String'];
};


export type QueryGradientVolumeArgs = {
  id: Scalars['String'];
};


export type QueryInvoicesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InvoiceOrder>;
};


export type QueryMachineMinimumSubscriptionArgs = {
  agentType: Agent;
  machine: Scalars['String'];
};


export type QueryModelArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryModelDeploymentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<ModelOrder>;
  projectId?: InputMaybe<Scalars['String']>;
};


export type QueryModelVersionArgs = {
  modelHandle?: InputMaybe<Scalars['String']>;
  modelId?: InputMaybe<Scalars['String']>;
  version: Scalars['String'];
};


export type QueryModelVersionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  modelId: Scalars['String'];
  orderBy?: InputMaybe<ModelVersionOrderField>;
};


export type QueryModelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ModelOrder>;
  projectId?: InputMaybe<Scalars['String']>;
};


export type QueryOperatingSystemArgs = {
  name: Scalars['String'];
};


export type QueryOperatingSystemGroupArgs = {
  name: Scalars['String'];
};


export type QueryOperatingSystemGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryOperatingSystemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OperatingSystemOrder>;
};


export type QueryPendingTeamMembershipArgs = {
  id: Scalars['Int'];
};


export type QueryPendingTeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};


export type QueryProjectActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['String'];
};


export type QueryProjectSecretsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectSecretOrder>;
  projectId: Scalars['String'];
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectOrder>;
};


export type QueryRegionArgs = {
  name: Scalars['String'];
};


export type QueryRegionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QuerySecretSubstitutionArgs = {
  clusterId?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  secrets: Array<Scalars['String']>;
};


export type QuerySharedDrivesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<SharedDriveOrder>;
  region?: InputMaybe<Scalars['String']>;
};


export type QuerySshKeyArgs = {
  name: Scalars['String'];
};


export type QuerySshKeysArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SshKeyOrder>;
};


export type QueryStorageProviderArgs = {
  id: Scalars['String'];
};


export type QueryStorageProvidersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StorageProviderOrder>;
};


export type QueryStorageRatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StorageRateOrder>;
};


export type QueryStripeArgs = {
  handle?: InputMaybe<Scalars['String']>;
};


export type QueryTeamAdminArgs = {
  handle: Scalars['String'];
};


export type QueryTeamComputeLimitsArgs = {
  handle: Scalars['String'];
};


export type QueryTeamSecretsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TeamSecretOrder>;
};


export type QueryTemplatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TemplateOrder>;
};


export type QueryUserAdminArgs = {
  email: Scalars['String'];
};


export type QueryVmTypeArgs = {
  name: Scalars['String'];
};


export type QueryVmTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryVpnArgs = {
  id: Scalars['Int'];
};


export type QueryVpnsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VpnOrder>;
  remoteNetwork?: InputMaybe<Scalars['String']>;
};

export type ReferralCode = {
  __typename?: 'ReferralCode';
  dtCreated: Scalars['DateTime'];
  payout: Scalars['Float'];
  promoCodeId: Scalars['Int'];
  referrerStripeId: Scalars['Int'];
  threshold: Scalars['Float'];
};

export type ReferralCodeOrder = {
  direction?: OrderDirection;
  field?: ReferralCodeOrderField;
};

export enum ReferralCodeOrderField {
  DtCreated = 'dtCreated'
}

export type Region = {
  __typename?: 'Region';
  name: Scalars['String'];
};

export type RegionAvailableVmType = {
  __typename?: 'RegionAvailableVmType';
  isAvailable: Scalars['Boolean'];
  regionName: Scalars['String'];
  vmTypeLabel: Scalars['String'];
};

export type RegionAvailableVmTypeConnection = {
  __typename?: 'RegionAvailableVmTypeConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<RegionAvailableVmTypeEdge>;
  /** Flattened list of RegionAvailableVmType type */
  nodes: Array<RegionAvailableVmType>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type RegionAvailableVmTypeEdge = {
  __typename?: 'RegionAvailableVmTypeEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: RegionAvailableVmType;
};

export type RegionConnection = {
  __typename?: 'RegionConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<RegionEdge>;
  /** Flattened list of Region type */
  nodes: Array<Region>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type RegionEdge = {
  __typename?: 'RegionEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Region;
};

export type RegisterOperatingSystemFromBaseInput = {
  baseOperatingSystemLabel: Scalars['String'];
  newOperatingSystemDescription: Scalars['String'];
  newOperatingSystemLabel: Scalars['String'];
  newOperatingSystemName: Scalars['String'];
};

export type RegisterOperatingSystemFromBasePayload = {
  __typename?: 'RegisterOperatingSystemFromBasePayload';
  operatingSystem?: Maybe<OperatingSystem>;
};

export type RegisterTemplateFromBaseInput = {
  baseTemplateId: Scalars['String'];
  newTemplateName: Scalars['String'];
};

export type RegisterTemplateFromBasePayload = {
  __typename?: 'RegisterTemplateFromBasePayload';
  template?: Maybe<PublicTemplate>;
};

export type RetryInvoicePaymentInput = {
  invoiceId: Scalars['Int'];
};

export type RetryInvoicePaymentPayload = {
  __typename?: 'RetryInvoicePaymentPayload';
  invoice: Invoice;
};

export type SshKey = {
  __typename?: 'SSHKey';
  actor: Actor;
  dtCreated: Scalars['DateTime'];
  dtDeleted?: Maybe<Scalars['DateTime']>;
  dtModified: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  publicKey: Scalars['String'];
};

export type SshKeyConnection = {
  __typename?: 'SSHKeyConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<SshKeyEdge>;
  /** Flattened list of SSHKey type */
  nodes: Array<SshKey>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type SshKeyEdge = {
  __typename?: 'SSHKeyEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: SshKey;
};

export type SshKeyOrder = {
  direction?: OrderDirection;
  field?: SshKeyOrderField;
};

export enum SshKeyOrderField {
  DtCreated = 'dtCreated',
  Name = 'name'
}

export type SecretSubsitution = {
  __typename?: 'SecretSubsitution';
  subsitutions: Array<Substition>;
};

export type SetComputeLimitInput = {
  alertAmount?: InputMaybe<Scalars['Float']>;
  maxAmount?: InputMaybe<Scalars['Float']>;
  teamId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type SetComputeLimitPayload = {
  __typename?: 'SetComputeLimitPayload';
  computeLimit: ComputeLimit;
};

export type SharedDrive = {
  __typename?: 'SharedDrive';
  id: Scalars['String'];
  mountPoint: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  region?: Maybe<Region>;
  size: Scalars['BigInt'];
  username: Scalars['String'];
};

export type SharedDriveConnection = {
  __typename?: 'SharedDriveConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<SharedDriveEdge>;
  /** Flattened list of SharedDrive type */
  nodes: Array<SharedDrive>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type SharedDriveEdge = {
  __typename?: 'SharedDriveEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: SharedDrive;
};

export type SharedDriveOrder = {
  direction?: OrderDirection;
  field?: SharedDriveOrderField;
};

export enum SharedDriveOrderField {
  DtCreated = 'dtCreated',
  Name = 'name'
}

export type StorageLimit = {
  __typename?: 'StorageLimit';
  storageLimitReached: Scalars['Boolean'];
};

export type StorageProvider = {
  __typename?: 'StorageProvider';
  id: Scalars['String'];
  name: Scalars['String'];
  s3Config?: Maybe<StorageProviderS3Config>;
  s3Secret?: Maybe<StorageProviderS3Secret>;
  storageProviderType?: Maybe<StorageProviderType>;
};

export type StorageProviderConnection = {
  __typename?: 'StorageProviderConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<StorageProviderEdge>;
  /** Flattened list of StorageProvider type */
  nodes: Array<StorageProvider>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type StorageProviderEdge = {
  __typename?: 'StorageProviderEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: StorageProvider;
};

export type StorageProviderOrder = {
  direction?: OrderDirection;
  field?: StorageProviderOrderField;
};

export enum StorageProviderOrderField {
  DtCreated = 'dtCreated',
  Name = 'name'
}

export type StorageProviderS3Config = {
  __typename?: 'StorageProviderS3Config';
  accessKey: Scalars['String'];
  bucket: Scalars['String'];
  endpoint?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  retainData?: Maybe<Scalars['Boolean']>;
  secretAccessKey: Scalars['String'];
  signatureVersion?: Maybe<Scalars['String']>;
};

export type StorageProviderS3ConfigInput = {
  accessKey?: InputMaybe<Scalars['String']>;
  bucket?: InputMaybe<Scalars['String']>;
  endpoint?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  retainData?: InputMaybe<Scalars['Boolean']>;
  secretAccessKey?: InputMaybe<Scalars['String']>;
  signatureVersion?: InputMaybe<Scalars['String']>;
};

export type StorageProviderS3Secret = {
  __typename?: 'StorageProviderS3Secret';
  secretAccessKey: Scalars['String'];
};

export enum StorageProviderType {
  S3 = 's3'
}

export type StorageRate = {
  __typename?: 'StorageRate';
  rate: Scalars['Float'];
  size: Scalars['Int'];
  sizeInBytes: Scalars['BigInt'];
  snapshotRate: Scalars['Float'];
  templateRate: Scalars['Float'];
};

export type StorageRateConnection = {
  __typename?: 'StorageRateConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<StorageRateEdge>;
  /** Flattened list of StorageRate type */
  nodes: Array<StorageRate>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type StorageRateEdge = {
  __typename?: 'StorageRateEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: StorageRate;
};

export type StorageRateOrder = {
  direction?: OrderDirection;
  field?: StorageRateOrderField;
};

export enum StorageRateOrderField {
  Size = 'size'
}

export type StorageUtilization = {
  __typename?: 'StorageUtilization';
  availableFreeUsage: Scalars['String'];
  datasetUsage: Scalars['String'];
  modelUsage: Scalars['String'];
  notebookWorkspaceUsage: Scalars['String'];
  sharedStorageUsage: Scalars['String'];
  totalFreeUsage: Scalars['String'];
  totalUsage: Scalars['String'];
};

export type Stripe = {
  __typename?: 'Stripe';
  addCardDeclineCount: Scalars['Int'];
  customer?: Maybe<StripeCustomer>;
  doNotAuthCharge?: Maybe<Scalars['Boolean']>;
  doNotInvoice?: Maybe<Scalars['Boolean']>;
  gradientSubscriptionId: Scalars['Int'];
  hasCreditCard: Scalars['Boolean'];
  stripeId?: Maybe<Scalars['String']>;
  subscription: GradientSubscription;
  vatId?: Maybe<Scalars['String']>;
};


export type StripeCustomerArgs = {
  handle?: InputMaybe<Scalars['String']>;
};


export type StripeVatIdArgs = {
  handle?: InputMaybe<Scalars['String']>;
};

export type StripeCardAddress = {
  __typename?: 'StripeCardAddress';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type StripeCharge = {
  __typename?: 'StripeCharge';
  amount: Scalars['Float'];
  dtCreated: Scalars['DateTime'];
  stripeId: Scalars['Int'];
  stripeObjectId: Scalars['String'];
  taxAmount: Scalars['Float'];
  taxRate: Scalars['Float'];
};

export type StripeChargeOrder = {
  direction?: OrderDirection;
  field?: StripeChargeOrderField;
};

export enum StripeChargeOrderField {
  DtCreated = 'dtCreated'
}

export type StripeCustomer = {
  __typename?: 'StripeCustomer';
  address: Address;
  defaultSource?: Maybe<StripePaymentSource>;
  sources?: Maybe<Array<StripePaymentSource>>;
};

export type StripePaymentCard = {
  __typename?: 'StripePaymentCard';
  address: StripeCardAddress;
  brand: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  expMonth: Scalars['Int'];
  expYear: Scalars['Int'];
  id: Scalars['String'];
  isDefault: Scalars['Boolean'];
  last4: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type StripePaymentSource = {
  __typename?: 'StripePaymentSource';
  address: Address;
  brand: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  expMonth: Scalars['Int'];
  expYear: Scalars['Int'];
  id: Scalars['String'];
  last4: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

/** A secret and its decrypted value */
export type Substition = {
  __typename?: 'Substition';
  secret: Scalars['String'];
  value: Scalars['String'];
};

export type Team = {
  __typename?: 'Team';
  handle: Scalars['String'];
  id: Scalars['Int'];
  isLegacyTeam: Scalars['Boolean'];
  isSamlEnabled: Scalars['Boolean'];
  isUserTeam: Scalars['Boolean'];
  name: Scalars['String'];
  namespace: Scalars['String'];
  publicLocation?: Maybe<Scalars['String']>;
  publicProfileDescription?: Maybe<Scalars['String']>;
  publicProfileImageURL?: Maybe<Scalars['String']>;
  publicWebsite?: Maybe<Scalars['String']>;
  stripe?: Maybe<Stripe>;
  stripeId: Scalars['Int'];
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<TeamEdge>;
  /** Flattened list of Team type */
  nodes: Array<Team>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type TeamEdge = {
  __typename?: 'TeamEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Team;
};

export type TeamMembership = {
  __typename?: 'TeamMembership';
  adUsername?: Maybe<Scalars['String']>;
  dtConfirmed?: Maybe<Scalars['DateTime']>;
  isAdmin: Scalars['Boolean'];
  isOwner: Scalars['Boolean'];
  teamId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type TeamMembershipConnection = {
  __typename?: 'TeamMembershipConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<TeamMembershipEdge>;
  /** Flattened list of TeamMembership type */
  nodes: Array<TeamMembership>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type TeamMembershipEdge = {
  __typename?: 'TeamMembershipEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: TeamMembership;
};

export type TeamSecret = {
  __typename?: 'TeamSecret';
  dtCreated: Scalars['DateTime'];
  dtModified: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TeamSecretConnection = {
  __typename?: 'TeamSecretConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<TeamSecretEdge>;
  /** Flattened list of TeamSecret type */
  nodes: Array<TeamSecret>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type TeamSecretEdge = {
  __typename?: 'TeamSecretEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: TeamSecret;
};

export type TeamSecretOrder = {
  direction?: OrderDirection;
  field?: TeamSecretOrderField;
};

export enum TeamSecretOrderField {
  DtCreated = 'dtCreated'
}

export type Template = {
  agentType: Scalars['String'];
  availableVmTypes: TemplateAvailableVmTypeConnection;
  defaultSizeGb?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  name: Scalars['String'];
};


export type TemplateAvailableVmTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type TemplateAvailableVmType = {
  __typename?: 'TemplateAvailableVmType';
  isAvailable: Scalars['Boolean'];
  vmType: VmType;
};

export type TemplateAvailableVmTypeConnection = {
  __typename?: 'TemplateAvailableVmTypeConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<TemplateAvailableVmTypeEdge>;
  /** Flattened list of TemplateAvailableVmType type */
  nodes: Array<TemplateAvailableVmType>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type TemplateAvailableVmTypeEdge = {
  __typename?: 'TemplateAvailableVmTypeEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: TemplateAvailableVmType;
};

export type TemplateConnection = {
  __typename?: 'TemplateConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<TemplateEdge>;
  /** Flattened list of Template type */
  nodes: Array<Template>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type TemplateEdge = {
  __typename?: 'TemplateEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Template;
};

export type TemplateOrder = {
  direction?: OrderDirection;
  field?: TemplateOrderField;
};

export enum TemplateOrderField {
  DtCreated = 'dtCreated'
}

export type UpdateContainerRegistryInput = {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  namespace?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateContainerRegistryPayload = {
  __typename?: 'UpdateContainerRegistryPayload';
  containerRegistry: ContainerRegistry;
};

export type UpdateDatasetInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateDatasetPayload = {
  __typename?: 'UpdateDatasetPayload';
  dataset: GradientDataset;
};

export type UpdateDatasetVersionInput = {
  datasetId: Scalars['String'];
  isCommitted?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  version: Scalars['String'];
};

export type UpdateDatasetVersionPayload = {
  __typename?: 'UpdateDatasetVersionPayload';
  datasetVersion: GradientDatasetVersion;
};

export type UpdateDeploymentInput = {
  clusterId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  spec?: InputMaybe<DeploymentSpecDataInput>;
};

export type UpdateDeploymentPayload = {
  __typename?: 'UpdateDeploymentPayload';
  deployment: Deployment;
};

export type UpdateIntegrationConfigInput = {
  config: ConfigInput;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};

export type UpdateIntegrationConfigPayload = {
  __typename?: 'UpdateIntegrationConfigPayload';
  integrationConfig: GradientIntegrationConfig;
};

export type UpdateMachineInput = {
  id: Scalars['String'];
  networkId?: InputMaybe<Scalars['String']>;
};

export type UpdateMachinePayload = {
  __typename?: 'UpdateMachinePayload';
  machine: Machine;
};

export type UpdateModelInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateModelPayload = {
  __typename?: 'UpdateModelPayload';
  model: GradientModel;
};

export type UpdateModelVersionInput = {
  isCommitted?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  modelId: Scalars['String'];
  version: Scalars['String'];
};

export type UpdateModelVersionPayload = {
  __typename?: 'UpdateModelVersionPayload';
  modelVersion: ModelVersion;
};

export type UpdateStorageProviderInput = {
  id: Scalars['String'];
  isTeamDefault?: InputMaybe<Scalars['Boolean']>;
  s3Config?: InputMaybe<StorageProviderS3ConfigInput>;
};

export type UpdateStorageProviderPayload = {
  __typename?: 'UpdateStorageProviderPayload';
  storageProvider: StorageProvider;
};

export type UpdateStripeAdminInput = {
  addCardDeclineCount?: InputMaybe<Scalars['Int']>;
  doNotAuthCharge?: InputMaybe<Scalars['Boolean']>;
  doNotInvoice?: InputMaybe<Scalars['Boolean']>;
  teamHandle?: InputMaybe<Scalars['String']>;
};

export type UpdateStripeAdminPayload = {
  __typename?: 'UpdateStripeAdminPayload';
  stripe: Stripe;
};

export type UpdateSubscriptionAdminInput = {
  meta?: InputMaybe<Scalars['JSON']>;
  subscription: Scalars['String'];
  teamHandle: Scalars['String'];
};

export type UpdateSubscriptionInput = {
  meta?: InputMaybe<Scalars['JSON']>;
  subscription: Scalars['String'];
};

export type UpdateSubscriptionPayload = {
  __typename?: 'UpdateSubscriptionPayload';
  current: GradientSubscription;
  direction: DirectionEnum;
  target?: Maybe<GradientSubscription>;
};

export type UpdateTeamAdminInput = {
  handle: Scalars['String'];
  isLegacyTeam?: InputMaybe<Scalars['Boolean']>;
  isSamlEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateTeamAdminPayload = {
  __typename?: 'UpdateTeamAdminPayload';
  team: Team;
};

export type UpdateTeamProfileInput = {
  name?: InputMaybe<Scalars['String']>;
  publicLocation?: InputMaybe<Scalars['String']>;
  publicProfileDescription?: InputMaybe<Scalars['String']>;
  publicProfileImageURL?: InputMaybe<Scalars['String']>;
  publicWebsite?: InputMaybe<Scalars['String']>;
};

export type UpdateTeamProfilePayload = {
  __typename?: 'UpdateTeamProfilePayload';
  team: Team;
};

export type UpdateUserAdminInput = {
  blockResetPasswordRequestDeadline?: InputMaybe<Scalars['Int']>;
  countReconfirmationEmails?: InputMaybe<Scalars['Int']>;
  handle: Scalars['String'];
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']>;
  isQrCodeBasedMfaEnabled?: InputMaybe<Scalars['Boolean']>;
  requirePhoneVerification?: InputMaybe<Scalars['Boolean']>;
  requiresReconfirmation?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateUserAdminPayload = {
  __typename?: 'UpdateUserAdminPayload';
  user: User;
};

export type UpdateUserInfoInput = {
  coreSurvey?: InputMaybe<Scalars['JSON']>;
  gradientSurvey?: InputMaybe<Scalars['JSON']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateUserInfoPayload = {
  __typename?: 'UpdateUserInfoPayload';
  userInfo: UserInfo;
};

export type UpdateUserInput = {
  product?: InputMaybe<Scalars['String']>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  user: User;
};

export type UpdateVpnInput = {
  id: Scalars['Int'];
  psk?: InputMaybe<Scalars['String']>;
  remoteNetworks?: InputMaybe<Array<Scalars['String']>>;
  remoteTunnelEndpoint?: InputMaybe<Scalars['String']>;
};

export type UpdateVpnPayload = {
  __typename?: 'UpdateVPNPayload';
  vpn: Vpn;
};

export type UsageRate = {
  __typename?: 'UsageRate';
  description: Scalars['String'];
  rate: Scalars['Float'];
  type: Scalars['String'];
};

export type UsageRateConnection = {
  __typename?: 'UsageRateConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<UsageRateEdge>;
  /** Flattened list of UsageRate type */
  nodes: Array<UsageRate>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type UsageRateEdge = {
  __typename?: 'UsageRateEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: UsageRate;
};

export type User = {
  __typename?: 'User';
  blockResetPasswordRequestDeadline?: Maybe<Scalars['DateTime']>;
  dtConfirmed?: Maybe<Scalars['DateTime']>;
  dtDeleted?: Maybe<Scalars['DateTime']>;
  dtSignedUp?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  handle: Scalars['String'];
  id: Scalars['Int'];
  isAdmin: Scalars['Boolean'];
  isConfirmed: Scalars['Boolean'];
  isQrCodeBasedMfaEnabled: Scalars['Boolean'];
  lastname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneVerificationAttempts: Scalars['Int'];
  phoneVerified: Scalars['Boolean'];
  product?: Maybe<Scalars['String']>;
  requirePhoneVerification: Scalars['Boolean'];
  requiresReconfirmation: Scalars['Boolean'];
  teams: TeamConnection;
};


export type UserTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  abuse: Scalars['Boolean'];
  coreSurvey?: Maybe<Scalars['JSON']>;
  gradientSurvey?: Maybe<Scalars['JSON']>;
  tags?: Maybe<Scalars['String']>;
};

export type Vpn = {
  __typename?: 'VPN';
  dtCreated: Scalars['DateTime'];
  id: Scalars['Int'];
  networkId: Scalars['String'];
  psk: Scalars['String'];
  remoteNetworks: Array<Scalars['String']>;
  remoteTunnelEndpoint: Scalars['String'];
};

export type VpnConnection = {
  __typename?: 'VPNConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<VpnEdge>;
  /** Flattened list of VPN type */
  nodes: Array<Vpn>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type VpnEdge = {
  __typename?: 'VPNEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Vpn;
};

export type VpnOrder = {
  direction?: OrderDirection;
  field?: VpnOrderField;
};

export enum VpnOrderField {
  DtCreated = 'dtCreated'
}

export type Viewer = {
  __typename?: 'Viewer';
  team: Team;
  user: User;
};

export type VmType = {
  __typename?: 'VmType';
  cpus: Scalars['Int'];
  defaultUsageRates: UsageRateConnection;
  gpu?: Maybe<Scalars['String']>;
  gpuCount: Scalars['Int'];
  label: Scalars['String'];
  metadata?: Maybe<Scalars['JSON']>;
  nvlinkGpu?: Maybe<Scalars['String']>;
  nvlinkGpuCount?: Maybe<Scalars['Int']>;
  osPermissions: VmTypeOperatingSystemPermissionConnection;
  ram: Scalars['BigInt'];
  regionAvailability: RegionAvailableVmTypeConnection;
  supportsNvlink: Scalars['Boolean'];
  templates: TemplateConnection;
};


export type VmTypeDefaultUsageRatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type VmTypeOsPermissionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  os?: InputMaybe<Scalars['String']>;
};


export type VmTypeRegionAvailabilityArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
};


export type VmTypeTemplatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type VmTypeConnection = {
  __typename?: 'VmTypeConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<VmTypeEdge>;
  /** Flattened list of VmType type */
  nodes: Array<VmType>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type VmTypeEdge = {
  __typename?: 'VmTypeEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: VmType;
};

export type VmTypeOperatingSystemPermission = {
  __typename?: 'VmTypeOperatingSystemPermission';
  flag: Scalars['String'];
  operatingSystemLabel: Scalars['String'];
  vmTypeLabel: Scalars['String'];
};

export type VmTypeOperatingSystemPermissionConnection = {
  __typename?: 'VmTypeOperatingSystemPermissionConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<VmTypeOperatingSystemPermissionEdge>;
  /** Flattened list of VmTypeOperatingSystemPermission type */
  nodes: Array<VmTypeOperatingSystemPermission>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type VmTypeOperatingSystemPermissionEdge = {
  __typename?: 'VmTypeOperatingSystemPermissionEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: VmTypeOperatingSystemPermission;
};

export type WorkflowRun = {
  __typename?: 'WorkflowRun';
  clusterId: Scalars['Int'];
  dtCreated: Scalars['DateTime'];
  dtFinished: Scalars['DateTime'];
  dtStarted: Scalars['DateTime'];
  dtStatus: Scalars['DateTime'];
  message: Scalars['String'];
  seqNum: Scalars['Int'];
  teamId: Scalars['Int'];
  timeout: Scalars['Int'];
  userId: Scalars['Int'];
  workflowId: Scalars['UUID'];
  workflowPhaseId: Scalars['Int'];
  workflowSpecId: Scalars['UUID'];
};

export type WorkflowRunOrder = {
  direction?: OrderDirection;
  field?: WorkflowRunOrderField;
};

export enum WorkflowRunOrderField {
  DtCreated = 'dtCreated',
  DtFinished = 'dtFinished',
  DtStarted = 'dtStarted',
  DtStatus = 'dtStatus'
}

export type Address = {
  __typename?: 'address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type CreateDeploymentMutationVariables = Exact<{
  createDeploymentInput: CreateDeploymentInput;
}>;


export type CreateDeploymentMutation = { __typename?: 'Mutation', createDeployment: { __typename?: 'CreateDeploymentPayload', deployment: { __typename?: 'Deployment', id: string } } };

export type UpdateDeploymentMutationVariables = Exact<{
  updateDeploymentInput: UpdateDeploymentInput;
}>;


export type UpdateDeploymentMutation = { __typename?: 'Mutation', updateDeployment: { __typename?: 'UpdateDeploymentPayload', deployment: { __typename?: 'Deployment', id: string } } };

export type DeleteDeploymentMutationMutationVariables = Exact<{
  deleteDeploymentInput: DeleteDeploymentInput;
}>;


export type DeleteDeploymentMutationMutation = { __typename?: 'Mutation', deleteDeployment: { __typename?: 'DeleteDeploymentPayload', deployment: { __typename?: 'Deployment', id: string, name: string } } };

export type DeploymentQueryVariables = Exact<{
  deploymentId: Scalars['UUID'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  runOrderBy?: InputMaybe<DeploymentRunOrder>;
  instanceOrderBy?: InputMaybe<DeploymentRunInstanceOrder>;
}>;


export type DeploymentQuery = { __typename?: 'Query', deployment?: { __typename?: 'Deployment', id: string, name: string, dtCreated: Date, dtModified?: Date | null, deploymentSpecs: { __typename?: 'DeploymentSpecConnection', nodes: Array<{ __typename?: 'DeploymentSpec', id: string, endpointUrl: string, externalApplied?: Date | null, dtCreated: Date, dtInvalid?: Date | null, error?: string | null, actor: { __typename?: 'Actor', avatarUrl?: string | null, fullName?: string | null, email?: string | null }, cluster?: { __typename?: 'Cluster', name: string, fqdn: string } | null, data: { __typename?: 'DeploymentSpecData', image: string, containerRegistry?: string | null, port?: number | null, command?: Array<string> | null, env?: Array<{ __typename?: 'DeploymentSpecEnvVariable', name: string, value: string }> | null, models?: Array<{ __typename?: 'DeploymentSpecModel', id: string, path?: string | null }> | null, repositories?: { __typename?: 'DeploymentSpecRepositories', dataset?: string | null, mountPath?: string | null, repositories?: Array<{ __typename?: 'DeploymentSpecRepository', url: string, name: string, ref?: string | null, username?: string | null, password?: string | null }> | null } | null, resources?: { __typename?: 'DeploymentSpecResources', replicas: number, instanceType?: string | null, autoscaling?: { __typename?: 'DeploymentSpecAutoscaling', enabled?: boolean | null, maxReplicas: number, metrics: Array<{ __typename?: 'DeploymentSpecAutoscalingMetricObject', metric: string, summary: string, value: number }> } | null } | null }, deploymentRuns?: { __typename?: 'DeploymentRunConnection', nodes: Array<{ __typename?: 'DeploymentRun', id: string, availableReplicas?: number | null, readyReplicas?: number | null, replicas?: number | null, dtDeleted?: Date | null, dtModified?: Date | null, dtCreated: Date, deploymentRunInstances?: { __typename?: 'DeploymentRunInstanceConnection', nodes: Array<{ __typename?: 'DeploymentRunInstance', id: string, externalApplied?: Date | null, dtStarted?: Date | null, dtFinished?: Date | null, dtDeleted?: Date | null, phase?: InstancePhase | null, state?: DeploymentRunInstanceState | null, stateMessage?: string | null }> } | null }> } | null }>, edges: Array<{ __typename?: 'DeploymentSpecEdge', cursor: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | null };

export type DeploymentListQueryVariables = Exact<{
  projectHandle: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type DeploymentListQuery = { __typename?: 'Query', deployments: { __typename?: 'DeploymentConnection', nodes: Array<{ __typename?: 'Deployment', id: string, name: string, dtCreated: Date, deploymentSpecs: { __typename?: 'DeploymentSpecConnection', nodes: Array<{ __typename?: 'DeploymentSpec', id: string, externalApplied?: Date | null, dtCreated: Date, dtInvalid?: Date | null, error?: string | null, deploymentRuns?: { __typename?: 'DeploymentRunConnection', nodes: Array<{ __typename?: 'DeploymentRun', id: string, dtDeleted?: Date | null, availableReplicas?: number | null, readyReplicas?: number | null, replicas?: number | null, deploymentRunInstances?: { __typename?: 'DeploymentRunInstanceConnection', nodes: Array<{ __typename?: 'DeploymentRunInstance', id: string, externalApplied?: Date | null, dtStarted?: Date | null, dtFinished?: Date | null, phase?: InstancePhase | null, state?: DeploymentRunInstanceState | null, stateMessage?: string | null }> } | null }> } | null, data: { __typename?: 'DeploymentSpecData', image: string, containerRegistry?: string | null, port?: number | null, command?: Array<string> | null, env?: Array<{ __typename?: 'DeploymentSpecEnvVariable', name: string, value: string }> | null, models?: Array<{ __typename?: 'DeploymentSpecModel', id: string, path?: string | null }> | null, repositories?: { __typename?: 'DeploymentSpecRepositories', dataset?: string | null, mountPath?: string | null, repositories?: Array<{ __typename?: 'DeploymentSpecRepository', url: string, name: string, ref?: string | null, username?: string | null, password?: string | null }> | null } | null, resources?: { __typename?: 'DeploymentSpecResources', replicas: number, instanceType?: string | null, autoscaling?: { __typename?: 'DeploymentSpecAutoscaling', enabled?: boolean | null, maxReplicas: number, metrics: Array<{ __typename?: 'DeploymentSpecAutoscalingMetricObject', metric: string, summary: string, value: number }> } | null } | null } }> } }>, edges: Array<{ __typename?: 'DeploymentEdge', cursor: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'CreateProjectPayload', project: { __typename?: 'Project', id: string, name: string, dtCreated: Date } } };

export type GetProjectQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: string, name: string, dtCreated: Date } | null };

export type ListProjectsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<ProjectOrder>;
}>;


export type ListProjectsQuery = { __typename?: 'Query', projects: { __typename?: 'ProjectConnection', nodes: Array<{ __typename?: 'Project', id: string, name: string, dtCreated: Date }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type ActivityLogQueryVariables = Exact<{
  projectId: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type ActivityLogQuery = { __typename?: 'Query', projectActivities: { __typename?: 'ProjectActivitiesConnection', nodes: Array<{ __typename: 'ProjectDeploymentAutoscalingDisabledActivity', id: string, dtCreated: Date, action: string, actor?: { __typename?: 'Actor', fullName?: string | null, email?: string | null, avatarUrl?: string | null } | null, deployment: { __typename?: 'Deployment', id: string, name: string, dtDeleted?: Date | null } } | { __typename: 'ProjectDeploymentAutoscalingEnabledActivity', id: string, dtCreated: Date, action: string, actor?: { __typename?: 'Actor', fullName?: string | null, email?: string | null, avatarUrl?: string | null } | null, deployment: { __typename?: 'Deployment', id: string, name: string, dtDeleted?: Date | null } } | { __typename: 'ProjectDeploymentCreatedActivity', id: string, dtCreated: Date, action: string, actor?: { __typename?: 'Actor', fullName?: string | null, email?: string | null, avatarUrl?: string | null } | null, deployment: { __typename?: 'Deployment', id: string, name: string, dtDeleted?: Date | null } } | { __typename: 'ProjectDeploymentDeletedActivity', id: string, dtCreated: Date, action: string, actor?: { __typename?: 'Actor', fullName?: string | null, email?: string | null, avatarUrl?: string | null } | null, deployment: { __typename?: 'Deployment', id: string, name: string, dtDeleted?: Date | null } } | { __typename: 'ProjectDeploymentDisabledActivity', id: string, dtCreated: Date, action: string, actor?: { __typename?: 'Actor', fullName?: string | null, email?: string | null, avatarUrl?: string | null } | null, deployment: { __typename?: 'Deployment', id: string, name: string, dtDeleted?: Date | null } } | { __typename: 'ProjectDeploymentEnabledActivity', id: string, dtCreated: Date, action: string, actor?: { __typename?: 'Actor', fullName?: string | null, email?: string | null, avatarUrl?: string | null } | null, deployment: { __typename?: 'Deployment', id: string, name: string, dtDeleted?: Date | null } } | { __typename: 'ProjectDeploymentScaledActivity', id: string, dtCreated: Date, action: string, actor?: { __typename?: 'Actor', fullName?: string | null, email?: string | null, avatarUrl?: string | null } | null, data: { __typename: 'ProjectActivityAutoscalingData', from: number, to: number }, deployment: { __typename?: 'Deployment', id: string, name: string, dtDeleted?: Date | null } } | { __typename: 'ProjectDeploymentUpdatedActivity', id: string, dtCreated: Date, action: string, actor?: { __typename?: 'Actor', fullName?: string | null, email?: string | null, avatarUrl?: string | null } | null, deployment: { __typename?: 'Deployment', id: string, name: string, dtDeleted?: Date | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { __typename?: 'Query', viewer?: { __typename?: 'Viewer', team: { __typename?: 'Team', namespace: string } } | null };


export const CreateDeploymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDeployment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createDeploymentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateDeploymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDeployment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createDeploymentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateDeploymentMutation, CreateDeploymentMutationVariables>;
export const UpdateDeploymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDeployment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateDeploymentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateDeploymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDeployment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateDeploymentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateDeploymentMutation, UpdateDeploymentMutationVariables>;
export const DeleteDeploymentMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteDeploymentMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteDeploymentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteDeploymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDeployment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteDeploymentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteDeploymentMutationMutation, DeleteDeploymentMutationMutationVariables>;
export const DeploymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Deployment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deploymentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runOrderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeploymentRunOrder"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"instanceOrderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeploymentRunInstanceOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deployment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deploymentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"dtModified"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentSpecs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endpointUrl"}},{"kind":"Field","name":{"kind":"Name","value":"externalApplied"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"dtInvalid"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cluster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fqdn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"containerRegistry"}},{"kind":"Field","name":{"kind":"Name","value":"port"}},{"kind":"Field","name":{"kind":"Name","value":"command"}},{"kind":"Field","name":{"kind":"Name","value":"env"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"models"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataset"}},{"kind":"Field","name":{"kind":"Name","value":"mountPath"}},{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ref"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"resources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replicas"}},{"kind":"Field","name":{"kind":"Name","value":"autoscaling"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"maxReplicas"}},{"kind":"Field","name":{"kind":"Name","value":"metrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metric"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"instanceType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"deploymentRuns"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runOrderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"availableReplicas"}},{"kind":"Field","name":{"kind":"Name","value":"readyReplicas"}},{"kind":"Field","name":{"kind":"Name","value":"replicas"}},{"kind":"Field","name":{"kind":"Name","value":"dtDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"dtModified"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentRunInstances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"instanceOrderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalApplied"}},{"kind":"Field","name":{"kind":"Name","value":"dtStarted"}},{"kind":"Field","name":{"kind":"Name","value":"dtFinished"}},{"kind":"Field","name":{"kind":"Name","value":"dtDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"phase"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateMessage"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeploymentQuery, DeploymentQueryVariables>;
export const DeploymentListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeploymentList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectHandle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deployments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectHandle"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentSpecs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentRuns"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dtDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"availableReplicas"}},{"kind":"Field","name":{"kind":"Name","value":"readyReplicas"}},{"kind":"Field","name":{"kind":"Name","value":"replicas"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentRunInstances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalApplied"}},{"kind":"Field","name":{"kind":"Name","value":"dtStarted"}},{"kind":"Field","name":{"kind":"Name","value":"dtFinished"}},{"kind":"Field","name":{"kind":"Name","value":"phase"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateMessage"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"containerRegistry"}},{"kind":"Field","name":{"kind":"Name","value":"port"}},{"kind":"Field","name":{"kind":"Name","value":"command"}},{"kind":"Field","name":{"kind":"Name","value":"env"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"models"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataset"}},{"kind":"Field","name":{"kind":"Name","value":"mountPath"}},{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ref"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"resources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replicas"}},{"kind":"Field","name":{"kind":"Name","value":"instanceType"}},{"kind":"Field","name":{"kind":"Name","value":"autoscaling"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"maxReplicas"}},{"kind":"Field","name":{"kind":"Name","value":"metrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metric"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalApplied"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"dtInvalid"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<DeploymentListQuery, DeploymentListQueryVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const GetProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}}]}}]}}]} as unknown as DocumentNode<GetProjectQuery, GetProjectQueryVariables>;
export const ListProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<ListProjectsQuery, ListProjectsQueryVariables>;
export const ActivityLogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ActivityLog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectActivities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectDeploymentCreatedActivity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtDeleted"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectDeploymentDeletedActivity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtDeleted"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectDeploymentDisabledActivity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtDeleted"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectDeploymentEnabledActivity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtDeleted"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectDeploymentUpdatedActivity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtDeleted"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectDeploymentAutoscalingEnabledActivity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtDeleted"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectDeploymentAutoscalingDisabledActivity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtDeleted"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectDeploymentScaledActivity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dtCreated"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dtDeleted"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<ActivityLogQuery, ActivityLogQueryVariables>;
export const ViewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"namespace"}}]}}]}}]}}]} as unknown as DocumentNode<ViewerQuery, ViewerQueryVariables>;