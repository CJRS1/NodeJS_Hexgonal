"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseInfrastructure = void 0;
const database_bootstrap_1 = __importDefault(require("../../bootstrap/database.bootstrap"));
const _ = __importStar(require("lodash"));
const response_dto_1 = require("../application/interface/dto/response.dto");
const trace_helpers_1 = require("../helpers/trace.helpers");
class BaseInfrastructure {
    constructor(entity) {
        this.entity = entity;
    }
    async update(entity, where, relations = []) {
        const dataSource = database_bootstrap_1.default.dataSource;
        const repository = dataSource.getRepository(this.entity);
        let recordToUpdate = await repository.findOne({
            where,
            relations,
        });
        /* Loash es para que actualice determinados campos no todos */
        recordToUpdate = _.merge(recordToUpdate, entity);
        await repository.save(recordToUpdate);
        return (0, response_dto_1.ResponseDto)(trace_helpers_1.Trace.traceId, recordToUpdate);
    }
    async delete(where) {
        const dataSource = database_bootstrap_1.default.dataSource;
        const repository = dataSource.getRepository(this.entity);
        let recordToDelete = await repository.findOne({
            where,
        });
        recordToDelete = _.merge(recordToDelete, { active: false });
        await repository.save(recordToDelete);
        return (0, response_dto_1.ResponseDto)(trace_helpers_1.Trace.traceId, recordToDelete);
    }
    async findOne(where = {}, relations = []) {
        const dataSource = database_bootstrap_1.default.dataSource;
        const repository = dataSource.getRepository(this.entity);
        const data = await repository.findOne({ where, relations });
        return (0, response_dto_1.ResponseDto)(trace_helpers_1.Trace.traceId, data);
    }
    /* Valor por defecto se el da al findAll vario por si no se envia nada */
    async findAll(where = {}, relations = [], order = {}) {
        const dataSource = database_bootstrap_1.default.dataSource;
        const repository = dataSource.getRepository(this.entity);
        const _where = Object.assign(where, { active: true });
        const data = await repository.find({
            where: _where,
            relations,
            order,
        });
        return (0, response_dto_1.ResponseDto)(trace_helpers_1.Trace.traceId, data);
    }
    async insert(entity) {
        const dataSource = database_bootstrap_1.default.dataSource;
        const repository = dataSource.getRepository(this.entity);
        const instance = repository.create(entity);
        const data = await repository.save(instance);
        return (0, response_dto_1.ResponseDto)(trace_helpers_1.Trace.traceId, data);
    }
    async getPage(page, pageSize, where = {}, relations = [], order = {}) {
        const dataSource = database_bootstrap_1.default.dataSource;
        const repository = dataSource.getRepository(this.entity);
        const [data, total] = await repository.findAndCount({
            where,
            relations,
            order,
            skip: page * pageSize,
            take: pageSize,
        });
        return (0, response_dto_1.ResponseDto)(trace_helpers_1.Trace.traceId, data, total);
    }
}
exports.BaseInfrastructure = BaseInfrastructure;
//# sourceMappingURL=base-infrastructure.js.map